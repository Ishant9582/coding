import React from "react";
import { Container, LogoutBtn } from "../index"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const authstatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate()
    const navItems = [
        {
            name: "home",
            slug: "/",
            active: true
        },
        {
            name: "login",
            slug: "/login",
            active: !authstatus
        },
        {
            name: "signup",
            slug: "/signup",
            active: !authstatus
        },
        {
            name: "all posts",
            slug: "/all-posts",
            active: authstatus,
        },
        {
            name: "add new",
            slug: "/add-new",
            active: authstatus,
        }
    ]
    return (
        <header className="py-3 shadow bg-gray-500">
            <Container>
                <nav className="flex">
                    <div className="mr-4">
                        <Link to="/">
                            Logo
                        </Link>
                    </div>
                    <ul className="felx ml-auto">
                        {navItems.map((item)=>
                        item.active ? (
                            <li key={item.name}>
                                <button onClick={()=>navigate(item.slug)}
                                className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                                >{item.name}</button>
                            </li>
                        ) : null
                        )}
                        {authstatus && (
                            <li>
                                <LogoutBtn/>
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    )
}