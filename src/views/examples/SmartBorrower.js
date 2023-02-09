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
  CardImg,
  CardTitle,
  CardText,
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

export default function SmartBorrowers() {
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
    <div>
      {/* <ExamplesNavbar /> */}
      {/* <Basics /> */}
      {/* <Navbars /> */}
      {/* <Pagination />
          <Notifications />
          <Typography /> */}
      <div className="section">
        <Container>
          <div className="title">
            <h3>Latest Research</h3>
          </div>
          <Row className="justify-content-between align-items-center">
            <Col className="mb-5 mb-lg-0" lg="5">
              <h1 className="text-white font-weight-light">
                Researches In Finance Sector
              </h1>
              <p className="text-white mt-4">
                Black Design comes with three pre-built pages to help you get
                started faster. You can change the text and images and you're
                good to go.
              </p>
              <Button
                className="mt-4"
                color="warning"
                // href="https://demos.creative-tim.com/blk-design-system-react/#/documentation/alert"
              >
                Know More
              </Button>
            </Col>
            <Col lg="6">
              <UncontrolledCarousel
                items={carouselItems}
                indicators={false}
                autoPlay={true}
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section">
        <Container>
        <div className="title">
            <h3>Regular Updates</h3>
          </div>
          <Row>
            <Col md="4">
              <Card style={{ width: "20rem" }}>
                <CardImg top src={require("assets/img/denys.jpg")} alt="..." />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardText>
                    <Table className="tablesorter" responsive>
                      <thead className="text-primary">
                        <tr>
                          <th className="header">Latest Crypto News</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>The Daily: Nexo to Pay on Stable...</td>
                        </tr>
                        <tr>
                          <td>Venezuela Begins Public of Nation...</td>
                        </tr>
                        <tr>
                          <td>PR: BitCanna – Dutch Blockchain...</td>
                        </tr>
                      </tbody>
                    </Table>
                  </CardText>
                  <Button
                    className="btn-simple btn-icon btn-round float-right"
                    color="primary"
                    type="submit"
                  >
                    <i className="tim-icons icon-send" />
                  </Button>
                  {/* <Button color="primary">Go somewhere</Button> */}
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card style={{ width: "20rem" }}>
                <CardImg top src={require("assets/img/denys.jpg")} alt="..." />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardText>
                    <Table className="tablesorter" responsive>
                      <thead className="text-primary">
                        <tr>
                          <th className="header">Latest Crypto News</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>The Daily: Nexo to Pay on Stable...</td>
                        </tr>
                        <tr>
                          <td>Venezuela Begins Public of Nation...</td>
                        </tr>
                        <tr>
                          <td>PR: BitCanna – Dutch Blockchain...</td>
                        </tr>
                      </tbody>
                    </Table>
                  </CardText>
                  <Button
                    className="btn-simple btn-icon btn-round float-right"
                    color="primary"
                    type="submit"
                  >
                    <i className="tim-icons icon-send" />
                  </Button>
                  {/* <Button color="primary">Go somewhere</Button> */}
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card style={{ width: "20rem" }}>
                <CardImg top src={require("assets/img/denys.jpg")} alt="..." />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardText>
                    <Table className="tablesorter" responsive>
                      <thead className="text-primary">
                        <tr>
                          <th className="header">Latest Crypto News</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>The Daily: Nexo to Pay on Stable...</td>
                        </tr>
                        <tr>
                          <td>Venezuela Begins Public of Nation...</td>
                        </tr>
                        <tr>
                          <td>PR: BitCanna – Dutch Blockchain...</td>
                        </tr>
                      </tbody>
                    </Table>
                  </CardText>
                  <Button
                    className="btn-simple btn-icon btn-round float-right"
                    color="primary"
                    type="submit"
                  >
                    <i className="tim-icons icon-send" />
                  </Button>
                  {/* <Button color="primary">Go somewhere</Button> */}
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section">
        <Container>
          <div className="title">
            <h3>Borrower Education</h3>
          </div>
          <Row className="justify-content-between align-items-center">
            <Col lg="6">
              <UncontrolledCarousel
                items={carouselItems}
                indicators={false}
                autoPlay={true}
              />
            </Col>
            <Col className="mb-5 mb-lg-0" lg="5">
              <Card className="w-100 h-100">
                <CardHeader>
                  <Nav className="nav-tabs-info" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: iconTabs === 1,
                        })}
                        onClick={(e) => setIconsTabs(1)}
                        href="#pablo"
                      >
                        <i className="tim-icons icon-spaceship" />
                        Cibil
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: iconTabs === 2,
                        })}
                        onClick={(e) => setIconsTabs(2)}
                        href="#pablo"
                      >
                        <i className="tim-icons icon-settings-gear-63" />
                        Eligibility
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: iconTabs === 3,
                        })}
                        onClick={(e) => setIconsTabs(3)}
                        href="#pablo"
                      >
                        <i className="tim-icons icon-bag-16" />
                        Sanction
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="tab-space"
                    activeTab={"link" + iconTabs}
                  >
                    <TabPane tabId="link1">
                      <p>
                        Collaboratively administrate empowered markets via
                        plug-and-play networks. Dynamically procrastinate B2C
                        users after installed base benefits. <br />
                        <br />
                        Dramatically visualize customer directed convergence
                        without revolutionary ROI.
                      </p>
                    </TabPane>
                    <TabPane tabId="link2">
                      <p>
                        Completely synergize resource taxing relationships via
                        premier niche markets. Professionally cultivate
                        one-to-one customer service with robust ideas. <br />
                        <br />
                        Dynamically innovate resource-leveling customer service
                        for state of the art customer service.
                      </p>
                    </TabPane>
                    <TabPane tabId="link3">
                      <p>
                        Efficiently unleash cross-media information without
                        cross-media value. Quickly maximize timely deliverables
                        for real-time schemas. <br />
                        <br />
                        Dramatically maintain clicks-and-mortar solutions
                        without functional solutions.
                      </p>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <NucleoIcons />
          <Signup />
          <Examples />
          <Download /> */}
    </div>
  );
}
