import { Grid } from "@mui/material";

const Services = () => {
    return <div className="">
        <div>
            <div className="content-sub-title">
                SERVICES
            </div>

            <div style={{ height: '30px' }}></div>

            <Grid container>
                <Grid item md={6}>
                    <div className="service-item">
                        <div>
                            <i className="devicon-react-original" style={{ fontSize: 30 }}></i>
                        </div>
                        <div>
                            <div className="experience-role">Web Application Development</div>
                        </div>
                    </div>
                </Grid>
                <Grid item md={6}>
                    <div className="service-item">
                        <div>
                            <i className="devicon-react-original" style={{ fontSize: 30 }}></i>
                        </div>
                        <div>
                            <div className="service-name">Mobile Application Development</div>
                        </div>
                    </div>
                </Grid>
                <Grid item md={6}>
                    <div className="service-item">
                        <div>
                            <i className="devicon-react-original" style={{ fontSize: 30 }}></i>
                        </div>
                        <div>
                            <div className="service-name">Backend Application Development</div>
                        </div>
                    </div>
                </Grid>
                <Grid item md={6}>
                    <div className="service-item">
                        <div>
                            <i className="devicon-react-original" style={{ fontSize: 30 }}></i>
                        </div>
                        <div>
                            <div className="service-name">Devops with AWS and GCP</div>
                        </div>
                    </div>
                </Grid>
            </Grid>


        </div>
    </div>
}

export default Services;