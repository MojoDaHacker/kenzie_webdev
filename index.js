import Image from "next/image";
import { Raleway } from "@next/font/google";
import {
  Button,
  Carousel,
  Col,
  Container,
  Form,
  Row,
  Tabs,
  Tab,
} from "react-bootstrap";
import { MobileSVG, WebSVG, ApiSVG, ComputerSVG } from "./public/images";
import AppointmentForm from "./components/AppointmentForm";

const raleway = Raleway({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Container className={`${raleway.className} text-center`}>
        <Row xs={1} md={2}>
          <Col className="">
            <Image
              src={ComputerSVG}
              className="w-100"
              style={{ height: "auto " }}
            />
          </Col>
          <Col className="text-start mt-2 d-flex align-items-center">
            <div className="">
              <p className="display-4 fw-semibold">
                Here to help bring your ideas, wireframes, or technical specs to
                working applications.{" "}
              </p>
              {/* <div className="w-75 text-center mx-auto">
                  <AppointmentForm />
                </div> */}
            </div>
          </Col>
        </Row>
        <Row xs={1} className="mt-3">
          <Col>
            <Tabs fill>
              <Tab eventKey="web" title="Web" className="mt-2">
                <h3>Web Development</h3>
                <div>
                  <Image
                    src={WebSVG}
                    className="w-75"
                    style={{ height: "auto " }}
                  />
                </div>
                <p style={{ maxWidth: 640 }} className="mx-auto">
                  While web development typically refers to web markup and
                  coding, website development includes all related development
                  tasks, such as client-side scripting, server-side scripting,
                  server and network security configuration, eCommerce
                  development, and content management system (CMS) development.
                </p>
              </Tab>
              <Tab eventKey="api" title="APIs" className="mt-2">
                <div>
                  <h3>API Development</h3>
                  <div>
                    <Image
                      src={ApiSVG}
                      className="w-75"
                      style={{ height: "auto " }}
                    />
                  </div>
                  <p style={{ maxWidth: 640 }} className="mx-auto">
                    API&apos;s empowers a mobile application or platform to
                    share its data with other apps/platforms and ease the user
                    experience without involving the developers. On the top of
                    it, APIs eliminate the need to build a similar program or
                    platform from scratch; you can use the existing one or some
                    other app/platform.
                  </p>
                </div>
              </Tab>
              <Tab eventKey="mobile" title="Mobile" className="mt-2">
                <div>
                  <h3>Mobile Development</h3>
                  <div>
                    <Image
                      src={MobileSVG}
                      className="w-75"
                      style={{ height: "auto " }}
                    />
                  </div>
                  <p style={{ maxWidth: 640 }} className="mx-auto">
                    Mobile app development is rapidly growing. From retail,
                    telecommunications and e-commerce to insurance, healthcare
                    and government, organizations across industries must meet
                    user expectations for real-time, convenient ways to conduct
                    transactions and access information.
                  </p>
                </div>
              </Tab>
            </Tabs>
          </Col>
        </Row>
        <Row className="my-3">
          <Col>
            <AppointmentForm />
          </Col>
        </Row>
        {/* <Row className="mt-3">
            <Col className="p-3 text-start">
              <h2>Wordpress Plugins</h2>
              <p>
                WordPress plugins are tools that can help you enhance the
                functionality of your website, without the need to learn coding.
                You can think of them as apps that give you more control over
                your content.
              </p>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col className="p-3 text-end">
              <h2>Digital Marketing</h2>
              <p>
                Leverage digital channels such as search engines, social media,
                email, and other websites to connect with current and
                prospective customers. This also includes communication through
                text or multimedia messages.
              </p>
            </Col>
          </Row> */}
      </Container>
    </main>
  );
}
