import { Column, Container, Button as EmailButton, Img, Row } from "@react-email/components";
import { Text } from "./text";

export function LeftAligned() {
    return (
        <Container align="left" className="max-w-full bg-primary p-6">
            <Row>
                <Img
                    aria-hidden
                    src="https://storage.googleapis.com/untitled_figma_snapshots/email-assets/logo.png"
                    alt="Untitled logo"
                    className="h-7 md:h-8"
                />
            </Row>
        </Container>
    );
}

export function LeftAlignedLinks() {
    return (
        <Container align="left" className="max-w-full bg-primary p-6">
            <Row className="mb-8">
                <Img
                    aria-hidden
                    src="https://storage.googleapis.com/untitled_figma_snapshots/email-assets/logo.png"
                    alt="Untitled logo"
                    className="h-7 md:h-8"
                />
            </Row>
            <Row>
                <EmailButton href="#" className="text-primary tt-sm-semi md:tt-md-semi">
                    Home
                </EmailButton>
                <EmailButton href="#blog" className="ml-4 text-primary tt-sm-semi md:tt-md-semi">
                    Blog
                </EmailButton>
                <EmailButton href="#tutorial" className="ml-4 text-primary tt-sm-semi md:tt-md-semi">
                    Tutorial
                </EmailButton>
                <EmailButton href="#support" className="ml-4 text-primary tt-sm-semi md:tt-md-semi">
                    Support
                </EmailButton>
            </Row>
        </Container>
    );
}

export function LeftAlignedSocials() {
    return (
        <Container align="center" className="min-w-[354px] max-w-full bg-primary p-6">
            <Row align="left" className="align-middle">
                <Img
                    aria-hidden
                    src="https://storage.googleapis.com/untitled_figma_snapshots/email-assets/logo.png"
                    alt="Untitled logo"
                    className="inline h-7 align-middle md:h-8"
                />
                <EmailButton href="#" className="mx-6 align-middle">
                    <Text className="text-primary tt-sm-semi md:tt-md-semi">Log in</Text>
                </EmailButton>
                <EmailButton aria-label="Facebook" href="#" className="align-middle">
                    <Img aria-hidden src="https://storage.googleapis.com/untitled_figma_snapshots/email-assets/x-black.png" alt="X logo" className="size-5" />
                </EmailButton>
                <EmailButton aria-label="Facebook" href="#" className="mx-4 align-middle">
                    <Img
                        aria-hidden
                        src="https://storage.googleapis.com/untitled_figma_snapshots/email-assets/facebook-black.png"
                        alt="Facebook logo"
                        className="size-5"
                    />
                </EmailButton>
                <EmailButton aria-label="Instagram" href="#" className="align-middle">
                    <Img
                        aria-hidden
                        src="https://storage.googleapis.com/untitled_figma_snapshots/email-assets/instagram-black.png"
                        alt="Instagram logo"
                        className="size-5"
                    />
                </EmailButton>
            </Row>
        </Container>
    );
}

export function CenterAligned() {
    return (
        <Container align="center" className="max-w-full bg-primary p-6">
            <Row>
                <Column align="center">
                    <Img
                        aria-hidden
                        src="https://storage.googleapis.com/untitled_figma_snapshots/email-assets/logo.png"
                        alt="Untitled logo"
                        className="h-7 md:h-8"
                    />
                </Column>
            </Row>
        </Container>
    );
}

export function CenterAlignedLinks() {
    return (
        <Container align="center" className="max-w-full bg-primary p-6">
            <Row>
                <Column align="center">
                    <Img
                        aria-hidden
                        src="https://storage.googleapis.com/untitled_figma_snapshots/email-assets/logo.png"
                        alt="Untitled logo"
                        className="h-7 md:h-8"
                    />
                </Column>
            </Row>
            <Row align="center">
                <Column align="center">
                    <EmailButton href="#" className="mr-4 text-primary tt-sm-semi md:tt-md-semi">
                        Home
                    </EmailButton>
                    <EmailButton href="#blog" className="mr-2 text-primary tt-sm-semi md:tt-md-semi">
                        Blog
                    </EmailButton>
                    <EmailButton href="#tutorial" className="ml-2 text-primary tt-sm-semi md:tt-md-semi">
                        Tutorial
                    </EmailButton>
                    <EmailButton href="#support" className="ml-4 text-primary tt-sm-semi md:tt-md-semi">
                        Support
                    </EmailButton>
                </Column>
            </Row>
        </Container>
    );
}

export function CenterAlignedSocials() {
    return (
        <Container align="center" className="min-w-[354px] max-w-full bg-primary p-6">
            <Row>
                <Column align="center">
                    <Img
                        aria-hidden
                        src="https://storage.googleapis.com/untitled_figma_snapshots/email-assets/logo.png"
                        alt="Untitled logo"
                        className="h-7 md:h-8"
                    />
                </Column>
            </Row>
            <Row align="center">
                <Column align="center">
                    <EmailButton aria-label="X (formerly Twitter)" href="#">
                        <Img
                            aria-hidden
                            src="https://storage.googleapis.com/untitled_figma_snapshots/email-assets/x-black.png"
                            alt="X logo"
                            className="size-5"
                        />
                    </EmailButton>

                    <EmailButton aria-label="Facebook" href="#" className="mx-4">
                        <Img
                            aria-hidden
                            src="https://storage.googleapis.com/untitled_figma_snapshots/email-assets/facebook-black.png"
                            alt="Facebook logo"
                            className="size-5"
                        />
                    </EmailButton>

                    <EmailButton aria-label="Instagram" href="#">
                        <Img
                            aria-hidden
                            src="https://storage.googleapis.com/untitled_figma_snapshots/email-assets/instagram-black.png"
                            alt="Instagram logo"
                            className="size-5"
                        />
                    </EmailButton>
                </Column>
            </Row>
        </Container>
    );
}
