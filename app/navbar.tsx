'use client';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';

import LogoIcon from "./components/logo";
import { RegisterButtonToronto } from "./registerbutton";
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function NavBar() {
    return (
        <nav className="w-full bg-black text-white p-6 md:text-xl lg:text-3xl xl:text-5xl border-b-teal-400 border-b-2 ">
            <Container className="flex justify-evenly items-center space-x-6">
                <Col>
                    <LogoIcon width={128} height={64} href="https://www.qsiteconf.ca/" />
                </Col>
                <Col>
                    <Link href="/" key="home" className={clsx("hover:text-gray-400", {"text-green-400": usePathname()==="/"})}>
                        Home
                    </Link>
                </Col>
                <Col>
                    <Link href="/program" key="program" className="hover:text-gray-400">
                        Program
                    </Link>
                </Col>
                <Col>
                    <Link href="/blog" key="blog" className="hover:text-gray-400">
                        Blog
                    </Link>
                </Col>
                <Col>
                    <Link href="/about" key="about" className="hover:text-gray-400">
                        About
                    </Link>
                </Col>
                <Col>
                    <RegisterButtonToronto />
                </Col>
                <Col>
                </Col>
            </Container>
        </nav>
    )
}