import { Card, CardContent } from "@mui/material";
import { useState } from "react";
import lablexerLogo from '../assets/lablexer.png';
import nodeAuthLogo from '../assets/node-auth.png';
import smartLogo from '../assets/smart.png';
import upworkLogo from '../assets/upwork.png';
import viaAppiaLogo from '../assets/via-appia.png';

const Experience = () => {
    const [showMore1, setShowMore1] = useState(false);
    const [showMore2, setShowMore2] = useState(false);
    const [showMore3, setShowMore3] = useState(false);
    const [showMore4, setShowMore4] = useState(false);
    const [showMore5, setShowMore5] = useState(false);
    const [showMore6, setShowMore6] = useState(false);

    return <div>
        <div className="content-sub-title">
            EXPERIENCE
        </div>

        <div style={{ height: '30px' }}></div>

        <Card variant="outlined">
            <CardContent>
                <div>
                    <div className="experience-job">
                        <div>
                            <img src={viaAppiaLogo} width={50} />
                        </div>
                        <div>
                            <div className="experience-role">Innovations Engineer</div>
                            <div className="experience-company">Via Appia Philippines - September 2023 - Present</div>
                        </div>
                    </div>
                    <div>
                        <div>
                            Designed serverless architectures, optimizing resource utilization and
                            reducing infrastructure costs.
                        </div>
                        {showMore1 && <div className="experience-body">
                            <div>
                                <ul>
                                    <li>
                                        Leveraged VueJS with Vuetify and Material Design, creating visually
                                        appealing and user-friendly interfaces.
                                    </li>
                                    <li>
                                        Developed ReactJS and NextJS applications with Material Design, focusing
                                        on modern UI/UX principles.
                                    </li>
                                    <li>
                                        Engineered .NET 8 C# Web APIs with Entity Framework, ensuring
                                        scalability and performance.
                                    </li>
                                    <li>
                                        Designed serverless architectures, optimizing resource utilization and
                                        reducing infrastructure costs.
                                    </li>
                                    <li>
                                        Implemented event-driven architectures with the Serverless Framework,
                                        enabling real-time responsiveness.
                                    </li>
                                    <li>
                                        Proficiently utilized MSSQL, PostgreSQL, Redshift, DynamoDB, MongoDB,
                                        and MySQL databases for various projects.
                                    </li>
                                    <li>
                                        Integrated AWS services such as S3, SNS, SQS, Cloudwatch,
                                        CloudFormation, SSM, API Gateway, and Lambda using the Serverless
                                        Framework.
                                    </li>
                                    <li>
                                        Implemented security measures with WAF, Cognito User Pool, Auth0, and
                                        Okta IDP.
                                    </li>
                                    <li>
                                        Implemented authentication and authorization using .NET Identity with
                                        JWT.
                                    </li>
                                    <li>
                                        Utilized NodeJS with Lambda and Sequelize for backend development.
                                    </li>
                                    <li>
                                        Implemented containerized applications with Docker, streamlining
                                        deployment processes.
                                    </li>
                                    <li>
                                        Orchestrated integrations between separate applications as a Tech Lead
                                        across multiple projects.
                                    </li>
                                </ul>
                            </div>
                        </div>}
                        <div className="experience-show-more"><a onClick={() => setShowMore1(prev => !prev)}>{showMore1 ? 'Show less..' : 'Show more..'}</a></div>
                    </div>
                </div>
            </CardContent>
        </Card>

        <div style={{ height: '20px' }}></div>

        <Card variant="outlined">
            <CardContent>
                <div>
                    <div className="experience-job">
                        <div>
                            <img src={nodeAuthLogo} width={50} />
                        </div>
                        <div>
                            <div className="experience-role">Opensource Developer</div>
                            <div className="experience-company">NodeAuth - March 2024 - Present</div>
                        </div>
                    </div>
                    <div className="timeline-body">
                        <div>
                            NodeAuth is an open-source authentication solution crafted specifically for
                            Node.js applications. Offering a robust set of features and flexibility,
                            NodeAuth empowers developers to seamlessly integrate secure user
                            authentication into their projects with ease.
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>

        <div style={{ height: '20px' }}></div>

        <Card variant="outlined">
            <CardContent>
                <div>
                    <div className="experience-job">
                        <div>
                            <img src={lablexerLogo} width={50} />
                        </div>
                        <div>
                            <div className="experience-role">Opensource Developer</div>
                            <div className="experience-company">Lablexer - Dec 2022 - Present</div>
                        </div>
                    </div>
                    <div>
                        <div>
                            As an open-source developer specializing in healthcare solutions, I played a
                            pivotal role in the development and enhancement of critical systems aimed at
                            revolutionizing patient care and optimizing healthcare workflows.
                        </div>
                        {showMore2 && <div className="experience-body">
                            <div>
                                <b>Health Information System (HIS) / Electronic Medical Record (EMR):</b>
                            </div>
                            <div>
                                <ul>
                                    <li>
                                        Spearheaded the development and maintenance of a comprehensive Health
                                        Information System (HIS) and Electronic Medical Record (EMR) solution.
                                    </li>
                                    <li>
                                        Leveraged NodeJS with Express for the backend infrastructure, ensuring
                                        scalability and reliability.
                                    </li>
                                    <li>
                                        Implemented PostgreSQL as the database solution, ensuring efficient
                                        storage and retrieval of medical data.
                                    </li>
                                    <li>
                                        Integrated HL7 (Health Level Seven) standards for seamless
                                        interoperability with other healthcare systems, facilitating efficient
                                        data exchange.
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <b>Laboratory Information System (LIS) with Hardware Integration:</b>
                            </div>
                            <div>
                                <ul>
                                    <li>
                                        Contributed to the design and implementation of a Laboratory Information
                                        System (LIS) with seamless hardware integration for efficient lab
                                        management.
                                    </li>
                                    <li>
                                        Utilized NodeJS to develop APIs for interfacing with laboratory
                                        equipment, ensuring smooth data exchange and integration.
                                    </li>
                                    <li>
                                        Integrated ReactJS with ElectronJS to develop desktop applications for
                                        laboratory technicians, enabling efficient workflow management.
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <b>Imaging Solutions</b>
                            </div>
                            <div>
                                <ul>
                                    <li>
                                        Played a key role in developing imaging solutions for managing and
                                        analyzing medical images such as X-rays, MRIs, and CT scans.
                                    </li>
                                    <li>
                                        Utilized NodeJS and Express for backend services, ensuring robust image
                                        storage and retrieval.
                                    </li>
                                    <li>
                                        Integrated PostgreSQL for image data management, ensuring reliability
                                        and scalability.
                                    </li>
                                    <li>
                                        Implemented HL7 for standardization of image metadata and
                                        interoperability with other healthcare systems.
                                    </li>
                                </ul>
                            </div>
                        </div>}
                        <div className="experience-show-more"><a onClick={() => setShowMore2(prev => !prev)}>{showMore2 ? 'Show less..' : 'Show more..'}</a></div>
                    </div>
                </div>
            </CardContent>
        </Card>

        <div style={{ height: '20px' }}></div>

        <Card variant="outlined">
            <CardContent>
                <div>
                    <div className="experience-job">
                        <div>
                            <img src={viaAppiaLogo} width={50} />
                        </div>
                        <div>
                            <div className="experience-role">Technical Consultant</div>
                            <div className="experience-company">Via Appia Philippines - March 2021 - September 2023</div>
                        </div>
                    </div>
                    <div>
                        <div>
                            Designed robust APIs and architectures, ensuring secure and efficient
                            communication between systems.
                        </div>
                        {showMore3 && <div className="experience-body">
                            <div>
                                <ul>
                                    <li>
                                        Orchestrated S3 integrations, optimizing storage solutions for
                                        scalability and efficiency.
                                    </li>
                                    <li>
                                        Designed robust APIs and architectures, ensuring secure and efficient
                                        communication between systems.
                                    </li>
                                    <li>
                                        Developed NodeJS backend applications with Express, implementing JWT,
                                        PassportJS, and OAuth2 for enhanced security.
                                    </li>
                                    <li>
                                        Contributed to mobile and web application development using Flutter,
                                        delivering cross-platform solutions.
                                    </li>
                                    <li>
                                        Managed Elastic Beanstalk environments, ensuring scalable and reliable
                                        deployments.
                                    </li>
                                    <li>
                                        Implemented CI/CD pipelines using GitHub Actions, Code Pipeline, Code
                                        Deploy, and Code Build for streamlined software delivery.
                                    </li>
                                    <li>
                                        Containerized applications using AWS ECS with Fargate and ECR, enhancing
                                        deployment processes.
                                        Implemented image management with Docker, optimizing resource
                                        utilization and scalability.
                                    </li>
                                    <li>
                                        Developed Single Page Applications with ReactJS for Backoffice and
                                        administrative purposes.
                                    </li>
                                    <li>
                                        Designed and developed desktop applications using Electron and ReactJS.
                                    </li>
                                    <li>
                                        Contributed to mobile development projects using Java, enriching the
                                        companys mobile application portfolio.
                                    </li>
                                </ul>
                            </div>
                        </div>}
                        <div className="experience-show-more"><a onClick={() => setShowMore3(prev => !prev)}>{showMore3 ? 'Show less..' : 'Show more..'}</a></div>
                    </div>
                </div>
            </CardContent>
        </Card>

        <div style={{ height: '20px' }}></div>

        <Card variant="outlined">
            <CardContent>
                <div>
                    <div className="experience-job">
                        <div>
                            <img src={viaAppiaLogo} width={50} />
                        </div>
                        <div>
                            <div className="experience-role">Junior Technical Consultant</div>
                            <div className="experience-company">Via Appia Philippines - March 2019 - March 2021</div>
                        </div>
                    </div>
                    <div>
                        <div>
                            Spearheaded mobile development projects using Outsystems, contributing
                            to the creation of intuitive and feature-rich applications.
                        </div>
                        {showMore4 && <div className="experience-body">
                            <div>
                                <ul>
                                    <li>
                                        Spearheaded mobile development projects using Outsystems, contributing
                                        to the creation of intuitive and feature-rich applications.
                                    </li>
                                    <li>
                                        Led the development of Single Page Applications (SPAs) and Progressive
                                        Web Apps (PWAs) with Outsystems, ensuring seamless user experiences
                                        across platforms.
                                    </li>
                                    <li>
                                        Managed deployments, ensuring smooth transitions and minimal downtime
                                        for critical systems.
                                    </li>
                                    <li>
                                        Applied Agile and Scrum methodologies to facilitate collaborative
                                        development efforts and meet project deadlines effectively.
                                    </li>
                                    <li>
                                        Successfully contributed to the Reconciliation Processes Project,
                                        enhancing data accuracy and operational efficiency.
                                    </li>
                                    <li>
                                        Utilized Google Cloud services, Google Maps APIs, Spreadsheet APIs, and
                                        OAuth2 authentications for seamless system integrations.
                                    </li>
                                    <li>
                                        Proficiently managed Oracle DB and PostgreSQL databases, ensuring data
                                        integrity and performance.
                                    </li>
                                    <li>
                                        Implemented Rest API integrations, facilitating seamless communication
                                        between various systems.
                                    </li>
                                    <li>
                                        Played a crucial role in developing business processes such as sales
                                        order management, delivery tracking, customer registration, credit
                                        tracking, employee KPIs, and authentication systems.
                                    </li>
                                </ul>
                            </div>
                        </div>}
                        <div className="experience-show-more"><a onClick={() => setShowMore4(prev => !prev)}>{showMore4 ? 'Show less..' : 'Show more..'}</a></div>
                    </div>
                </div>
            </CardContent>
        </Card>

        <div style={{ height: '20px' }}></div>

        <Card variant="outlined">
            <CardContent>
                <div>
                    <div className="experience-job">
                        <div>
                            <img src={upworkLogo} width={50} />
                        </div>
                        <div>
                            <div className="experience-role">Freelance Developer</div>
                            <div className="experience-company">Self Employed - 2015 - 2018</div>
                        </div>
                    </div>
                    <div>
                        <div>
                            {`Designed and developed an online store with an MVC architecture using Laravel, ensuring scalability and maintainability.`}
                        </div>
                        {showMore5 && <div className="experience-body">
                            <div>
                                <ul>
                                    <li>
                                        Designed and developed an online store with an MVC architecture using
                                        Laravel 5, ensuring scalability and maintainability.
                                    </li>
                                    <li>
                                        Implemented MySQL as the primary database for seamless data management
                                        and retrieval.
                                    </li>
                                    <li>
                                        Constructed an MVC and REST API hybrid utilizing Cognito for
                                        authentication, enhancing security and user experience.
                                    </li>
                                    <li>
                                        Leveraged VueJS to create a dynamic and responsive pizza ordering store,
                                        providing a seamless user interface.
                                    </li>
                                    <li>
                                        Developed REST APIs with Python using Django and Flask frameworks,
                                        ensuring efficient data exchange and integration.
                                    </li>
                                </ul>
                            </div>
                        </div>}
                        <div className="experience-show-more"><a onClick={() => setShowMore5(prev => !prev)}>{showMore5 ? 'Show less..' : 'Show more..'}</a></div>
                    </div>
                </div>
            </CardContent>
        </Card>

        <div style={{ height: '20px' }}></div>

        <Card variant="outlined">
            <CardContent>
                <div>
                    <div className="experience-job">
                        <div>
                            <img src={smartLogo} width={50} />
                        </div>
                        <div>
                            <div className="experience-role">Internship</div>
                            <div className="experience-company">Smart Communications, Inc. - April 2017 - July 2017</div>
                        </div>
                    </div>
                    <div>
                        <div>
                            {`During my internship at Smart Communications, Incorporated, I had the
                        opportunity to immerse myself in the dynamic world of telecommunications,
                        focusing extensively on troubleshooting and network optimization efforts.
                        Here's a glimpse into my experience:`}
                        </div>
                        {showMore6 && <div className="experience-body">
                            <div>
                                <ul>
                                    <li>
                                        Troubleshooting network issues by analyzing logs, monitoring network.
                                    </li>
                                    <li>
                                        Collaborated closely with network engineers to diagnose and resolve
                                        connectivity issues, ensuring minimal disruption to services.
                                    </li>
                                    <li>
                                        Assisted in the implementation of corrective measures and optimizations
                                        to improve network reliability, speed, and performance.
                                    </li>
                                    <li>
                                        Participated in equipment maintenance activities, including routine
                                        checks, updates, and repairs to ensure optimal functionality.
                                    </li>
                                    <li>
                                        Gained hands-on experience with telecommunications equipment, learning
                                        to identify and address common hardware and software issues.
                                    </li>
                                </ul>
                            </div>
                        </div>}
                        <div className="experience-show-more"><a onClick={() => setShowMore6(prev => !prev)}>{showMore6 ? 'Show less..' : 'Show more..'}</a></div>
                    </div>
                </div>
            </CardContent>
        </Card>

    </div>
}

export default Experience;