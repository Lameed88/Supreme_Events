import NavBar from "@/components/UserNavBar";
import { getUserToken } from "@/utils/getUserToken";
import Head from "next/head";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import { toast } from "react-toastify";

export default function payment() {
  const searchParams = useSearchParams();
  const token = searchParams.get("data");
  const purchaseData = JSON.parse(decodeURIComponent(token));

  console.log(purchaseData);
  const router = useRouter();

  // const [eventDetails, setEventDetails] = useState({ name: "", price: "" });
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
  });

  const now = new Date();
  const future = new Date(now.getFullYear() + 2, now.getMonth());
  const month =
    future.getMonth() < 9 ? `0${future.getMonth() + 1}` : future.getMonth() + 1;
  const year = future.getFullYear().toString().substr(-2);

  // Get Event-Id from URL
  const event_id = router.query.eventId;
  // console.log(event_id);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/getevent`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              event_id: event_id,
            }),
          }
        );
        if (response.ok) {
          const data = await response.json();
          setName(data.name);
          if (purchaseData) {
            setPrice(purchaseData.length * data.price);
          } else {
            setPrice(data.price);
          }
        } else {
          throw new Error(`${response.status} ${response.statusText}`);
        }
      } catch (error) {
        console.error("Error fetching event data:", error.message);
      }
    };

    if (event_id) {
      fetchEvent();
    }
  }, [event_id, purchaseData]);

  useEffect(() => {
    if (name && price && event_id) {
      setProduct({
        name: name,
        price: price,
        description: `Pay NGN. ${price} for the most awaited event, ${name}`,
      });
    }
  }, [name, price, event_id]);

  const handleToken = async (event, token, addresses) => {
    // Fetching user_token cookie value in user_id
    const user_id = getUserToken();

    // console.log("Payment gateway cookie fetch - ", user_id);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/payment`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            token,
            product,
            addresses,
            purchaseData,
            user: { user_id },
            event: { event_id },
          }),
        }
      );
      const data = await response.json();
      console.log(data);
      if (data.status === "success") {
        toast.success("Payment Successful. Check your mail for your details");
        router.push("/users/dashboard");
      } else if (data.status === "alreadyregistered") {
        toast.success("User is already registered.");
        router.push("/users/dashboard");
      } else {
        console.error(`Failed with status code ${response.status}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="pt-20 lg:pt-8">
      <NavBar />
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Puritan&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div
        className="flex flex-col pl-4 h-[700px]"
        style={{
          backgroundImage: "url('/leaves.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          filter: "blur(.2px)",
        }}
      >
        <div className="text-3xl ">
          <span className="" style={{ color: "white" }}>
            Pay using{" "}
          </span>
          <span
            className="text-4xl font-bold"
            style={{ color: "#5F57F7", fontFamily: "Puritan" }}
          >
            stripe
          </span>
        </div>
        <div className="text-sm text-gray-400">
          Payment is currently in Test Mode
        </div>

        <div className="m-6 flex flex-col ">
          <div className="" style={{ color: "white" }}>
            Use the following test credentials:{" "}
          </div>

          <div className="relative mb-6 overflow-x-auto shadow-xl lg:rounded-tl-3xl lg:rounded-br-3xl md:rounded-sm sm:rounded-lg w-full lg:w-1/3  ">
            <table className="w-full text-sm text-left my-2 ">
              <thead className="text-xs text-gray-700 uppercase bg-orange-200">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Field
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Value
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-orange-200 border-b hover:bg-orange-300">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap"
                  >
                    Card Number
                  </th>
                  <td
                    className="px-6 py-4 "
                    onClick={() => {
                      navigator.clipboard.writeText("4242 4242 4242 4242");
                    }}
                    title="Click to copy"
                  >
                    4242 4242 4242 4242
                  </td>
                </tr>
                <tr className="bg-orange-200 border-b hover:bg-orange-300">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap"
                  >
                    Expiry
                  </th>
                  <td className="px-6 py-4">
                    Any future date (eg: {month}/{year})
                  </td>
                </tr>
                <tr className="bg-orange-200  hover:bg-orange-300">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap"
                  >
                    CVC
                  </th>
                  <td className="px-6 py-4">Any 3 digit number (eg: 345)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <StripeCheckout
            className="flex justify-center w-max"
            stripeKey={process.env.NEXT_PUBLIC_STRIPE_KEY}
            amount={product.price * 100}
            token={handleToken}
            name={product.name}
            currency="NGN"
            billingAddress
            shippingAddress
          />
        </div>
      </div>
    </div>
  );
}
