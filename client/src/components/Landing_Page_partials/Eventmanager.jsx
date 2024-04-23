
import { useRouter } from "next/router";

function eventmanager () {
    const router = useRouter();

    return (
        <header className="absolute w-full ">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-20">
                    {/* Desktop navigation */}
                    <nav className="flex grow">
                        {/* Desktop sign in links */}
                        <ul className="flex grow justify-center flex-wrap items-center mt-10 ">
                            <li>
                                <a
                                    onClick={() =>
                                        router.push("/admin/auth")
                                    }
                                    className="btn-sm text-white bg-[color:var(--darker-secondary-color)] hover:bg-[color:var(--secondary-color)] ml-3 cursor-pointer"
                                >
                                    Event Manager
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default eventmanager;