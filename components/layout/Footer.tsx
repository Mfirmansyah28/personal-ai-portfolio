import Container from "./Container";

export default function Footer() {
    return (
        <footer className="border-t">
            <Container>
                <div className="flex h-20 items-center justify-center">
                    <p className="text-sm text-muted-forground">
                         © {new Date().getFullYear()} M. Firmansyah.
                        All rights reserved.
                    </p>
                </div>
            </Container>
        </footer>
    );
}