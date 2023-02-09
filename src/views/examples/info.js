/*!

=========================================================
* BLK Design System React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import classnames from "classnames";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  Form,
  Input,
  FormText,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCarousel,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";
import Basics from "views/IndexSections/Basics.js";
import Navbars from "views/IndexSections/Navbars.js";
import Tabs from "views/IndexSections/Tabs.js";
import Pagination from "views/IndexSections/Pagination.js";
import Notifications from "views/IndexSections/Notifications.js";
import Typography from "views/IndexSections/Typography.js";
import JavaScript from "views/IndexSections/JavaScript.js";
import NucleoIcons from "views/IndexSections/NucleoIcons.js";
import Signup from "views/IndexSections/Signup.js";
import Examples from "views/IndexSections/Examples.js";
import Download from "views/IndexSections/Download.js";
const carouselItems = [
  {
    src: require("assets/img/denys.jpg"),
    altText: "Slide 1",
    caption: "Big City Life, United States",
  },
  {
    src: require("assets/img/fabien-bazanegue.jpg"),
    altText: "Slide 2",
    caption: "Somewhere Beyond, United States",
  },
  {
    src: require("assets/img/mark-finn.jpg"),
    altText: "Slide 3",
    caption: "Stocks, United States",
  },
];

let ps = null;

export default function InfoPage() {
  const [iconTabs, setIconsTabs] = React.useState(1);
  const [textTabs, setTextTabs] = React.useState(4);
  const [tabs, setTabs] = React.useState(1);
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.body.classList.toggle("profile-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.documentElement.className += " perfect-scrollbar-off";
        document.documentElement.classList.remove("perfect-scrollbar-on");
      }
      document.body.classList.toggle("profile-page");
    };
  }, []);
  return (
    <>
      {/* <ExamplesNavbar /> */}
      {/* <Basics /> */}
      {/* <Navbars /> */}
      {/* <Pagination />
          <Notifications />
          <Typography /> */}

      <NucleoIcons />
      <Container>
        <div className="section section-nucleo-icons">
          <img alt="..." className="path" />
          <Row className="justify-content-center">
            <Col lg="8" md="12">
              <h2 className="title">Our Team </h2>
              <h4 className="description">
                BLK• Design System PRO comes with 100 custom icons made by our
                friends from NucleoApp. The official package contains over 2.100
                thin icons which are looking great in combination with BLK•
                Design System PRO Make sure you check all of them and use those
                that you like the most.
              </h4>
              <div className="btn-wrapper">
                <Button
                  className="btn-round"
                  color="primary"
                  // href="https://demos.creative-tim.com/blk-design-system-react/#/documentation/icons"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  View All
                </Button>
                {/* <Button
                className="btn-simple btn-round"
                color="primary"
                href="https://nucleoapp.com/?ref=1712"
                rel="noopener noreferrer"
                size="lg"
                target="_blank"
              >
                View All Icons
              </Button> */}
              </div>
            </Col>
          </Row>
        </div>
        <Row className="pt-5">
          <Col lg="4">
            <div className="section section-nucleo-icons">
              <img alt="..." className="path" />
              <Container>
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid rounded-circle"
                      src={require("assets/img/mike.jpg")}
                    />
                    <h4 className="title">Name</h4>
                    <h4 className="description">Designation</h4>
                  </CardHeader>
                  <CardBody>
                    {/* <Nav
                      className="nav-tabs-primary justify-content-center"
                      tabs
                    >
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: tabs === 1,
                          })}
                          onClick={(e) => {
                            e.preventDefault();
                            setTabs(1);
                          }}
                          href="#pablo"
                        >
                          Wallet
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: tabs === 2,
                          })}
                          onClick={(e) => {
                            e.preventDefault();
                            setTabs(2);
                          }}
                          href="#pablo"
                        >
                          Send
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: tabs === 3,
                          })}
                          onClick={(e) => {
                            e.preventDefault();
                            setTabs(3);
                          }}
                          href="#pablo"
                        >
                          News
                        </NavLink>
                      </NavItem>
                    </Nav> */}
                    <div>
                      <h4 className="description">
                        BLK• Design System PRO comes with 100 custom icons made
                        by our friends from NucleoApp.
                      </h4>
                      <div className="btn-wrapper profile pt-3">
                        <Button
                          className="btn-icon btn-round"
                          color="twitter"
                          href="https://twitter.com/creativetim"
                          id="tooltip639225725"
                          target="_blank"
                        >
                          <i className="fab fa-twitter" />
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip639225725"
                        >
                          Follow us
                        </UncontrolledTooltip>
                        <Button
                          className="btn-icon btn-round"
                          color="facebook"
                          href="https://www.facebook.com/creativetim"
                          id="tooltip982846143"
                          target="_blank"
                        >
                          <i className="fab fa-facebook-square" />
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip982846143"
                        >
                          Like us
                        </UncontrolledTooltip>
                        <Button
                          className="btn-icon btn-round"
                          color="dribbble"
                          href="https://dribbble.com/creativetim"
                          id="tooltip951161185"
                          target="_blank"
                        >
                          <i className="fab fa-dribbble" />
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip951161185"
                        >
                          Follow us
                        </UncontrolledTooltip>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Container>
            </div>
          </Col>
          <Col lg="4">
            <div className="section section-nucleo-icons">
              <img alt="..." className="path" />
              <Container>
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid rounded-circle"
                      src={require("assets/img/mike.jpg")}
                    />
                    <h4 className="title">Name</h4>
                    <h4 className="description">Designation</h4>
                  </CardHeader>
                  <CardBody>
                    {/* <Nav
                      className="nav-tabs-primary justify-content-center"
                      tabs
                    >
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: tabs === 1,
                          })}
                          onClick={(e) => {
                            e.preventDefault();
                            setTabs(1);
                          }}
                          href="#pablo"
                        >
                          Wallet
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: tabs === 2,
                          })}
                          onClick={(e) => {
                            e.preventDefault();
                            setTabs(2);
                          }}
                          href="#pablo"
                        >
                          Send
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: tabs === 3,
                          })}
                          onClick={(e) => {
                            e.preventDefault();
                            setTabs(3);
                          }}
                          href="#pablo"
                        >
                          News
                        </NavLink>
                      </NavItem>
                    </Nav> */}
                    <div>
                      <h4 className="description">
                        BLK• Design System PRO comes with 100 custom icons made
                        by our friends from NucleoApp.
                      </h4>
                      <div className="btn-wrapper profile pt-3">
                        <Button
                          className="btn-icon btn-round"
                          color="twitter"
                          href="https://twitter.com/creativetim"
                          id="tooltip639225725"
                          target="_blank"
                        >
                          <i className="fab fa-twitter" />
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip639225725"
                        >
                          Follow us
                        </UncontrolledTooltip>
                        <Button
                          className="btn-icon btn-round"
                          color="facebook"
                          href="https://www.facebook.com/creativetim"
                          id="tooltip982846143"
                          target="_blank"
                        >
                          <i className="fab fa-facebook-square" />
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip982846143"
                        >
                          Like us
                        </UncontrolledTooltip>
                        <Button
                          className="btn-icon btn-round"
                          color="dribbble"
                          href="https://dribbble.com/creativetim"
                          id="tooltip951161185"
                          target="_blank"
                        >
                          <i className="fab fa-dribbble" />
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip951161185"
                        >
                          Follow us
                        </UncontrolledTooltip>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Container>
            </div>
          </Col>
          <Col lg="4">
            <div className="section section-nucleo-icons">
              <img alt="..." className="path" />
              <Container>
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid rounded-circle"
                      src={require("assets/img/mike.jpg")}
                    />
                    <h4 className="title">Name</h4>
                    <h4 className="description">Designation</h4>
                  </CardHeader>
                  <CardBody>
                    {/* <Nav
                      className="nav-tabs-primary justify-content-center"
                      tabs
                    >
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: tabs === 1,
                          })}
                          onClick={(e) => {
                            e.preventDefault();
                            setTabs(1);
                          }}
                          href="#pablo"
                        >
                          Wallet
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: tabs === 2,
                          })}
                          onClick={(e) => {
                            e.preventDefault();
                            setTabs(2);
                          }}
                          href="#pablo"
                        >
                          Send
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: tabs === 3,
                          })}
                          onClick={(e) => {
                            e.preventDefault();
                            setTabs(3);
                          }}
                          href="#pablo"
                        >
                          News
                        </NavLink>
                      </NavItem>
                    </Nav> */}
                    <div>
                      <h4 className="description">
                        BLK• Design System PRO comes with 100 custom icons made
                        by our friends from NucleoApp.
                      </h4>
                      <div className="btn-wrapper profile pt-3">
                        <Button
                          className="btn-icon btn-round"
                          color="twitter"
                          href="https://twitter.com/creativetim"
                          id="tooltip639225725"
                          target="_blank"
                        >
                          <i className="fab fa-twitter" />
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip639225725"
                        >
                          Follow us
                        </UncontrolledTooltip>
                        <Button
                          className="btn-icon btn-round"
                          color="facebook"
                          href="https://www.facebook.com/creativetim"
                          id="tooltip982846143"
                          target="_blank"
                        >
                          <i className="fab fa-facebook-square" />
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip982846143"
                        >
                          Like us
                        </UncontrolledTooltip>
                        <Button
                          className="btn-icon btn-round"
                          color="dribbble"
                          href="https://dribbble.com/creativetim"
                          id="tooltip951161185"
                          target="_blank"
                        >
                          <i className="fab fa-dribbble" />
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip951161185"
                        >
                          Follow us
                        </UncontrolledTooltip>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
      {/*    <Signup />
          <Examples />
          <Download /> */}
    </>
  );
}
