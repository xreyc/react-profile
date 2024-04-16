import { Card, CardContent, Grid } from "@mui/material";
import githubLogo from '../assets/github.png';

const Codes = () => {
    return <div className="">
        <div>
            <div className="content-sub-title">
                CODES
            </div>

            <div style={{ height: '30px' }}></div>

            <div className="service-item">
                <div>
                    <i className="bi bi-1-circle" style={{ fontSize: 20 }}></i>
                </div>
                <div>
                    <div className="service-name">Authentication and Authorization</div>
                </div>
            </div>
            <Grid container spacing={2}>
                <Grid item md={6}>
                    <Card variant="outlined" className="code-card">
                        <CardContent>
                            <div className="codes-item">
                                <img src={githubLogo} height={30} />
                                <div>JWT Authentication and Oauth2 with NodeJS and Express</div>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item md={6}>
                    <Card variant="outlined" className="code-card">
                        <CardContent>
                            <div className="codes-item">
                                <img src={githubLogo} height={30} />
                                <div>JWT Authentication with PHP Laravel</div>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item md={6}>
                    <Card variant="outlined" className="code-card">
                        <CardContent>
                            <div className="codes-item">
                                <img src={githubLogo} height={30} />
                                <div>JWT Authentication with PHP CodeIgniter</div>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item md={6}>
                    <Card variant="outlined" className="code-card">
                        <CardContent>
                            <div className="codes-item">
                                <img src={githubLogo} height={30} />
                                <div>JWT Authentication with Python Django</div>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item md={6}>
                    <Card variant="outlined" className="code-card">
                        <CardContent>
                            <div className="codes-item">
                                <img src={githubLogo} height={30} />
                                <div>JWT Authentication with Python Flask</div>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item md={6}>
                    <Card variant="outlined" className="code-card">
                        <CardContent>
                            <div className="codes-item">
                                <img src={githubLogo} height={30} />
                                <div>JWT Authentication with C#, .NET, ASP.NET</div>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <div className="service-item" style={{ marginTop: '30px' }}>
                <div>
                    <i className="bi bi-2-circle" style={{ fontSize: 20 }}></i>
                </div>
                <div>
                    <div className="service-name">Mobile Applications</div>
                </div>
            </div>
            <Grid container spacing={2}>
                <Grid item md={6}>
                    <Card variant="outlined" className="code-card">
                        <CardContent>
                            <div className="codes-item">
                                <img src={githubLogo} height={30} />
                                <div>Hotel Management Application with Flutter</div>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item md={6}>
                    <Card variant="outlined" className="code-card">
                        <CardContent>
                            <div className="codes-item">
                                <img src={githubLogo} height={30} />
                                <div>Hotel Management Application with React Native</div>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item md={6}>
                    <Card variant="outlined" className="code-card">
                        <CardContent>
                            <div className="codes-item">
                                <img src={githubLogo} height={30} />
                                <div>Hotel Management Application with Ionic and Svelte</div>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <div className="service-item" style={{ marginTop: '30px' }}>
                <div>
                    <i className="bi bi-3-circle" style={{ fontSize: 20 }}></i>
                </div>
                <div>
                    <div className="service-name">Cloud Native Applications</div>
                </div>
            </div>
            <Grid container spacing={2}>
                <Grid item md={6}>
                    <Card variant="outlined" className="code-card">
                        <CardContent>
                            <div className="codes-item">
                                <img src={githubLogo} height={30} />
                                <div>Rest API with Serverless Framework</div>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item md={6}>
                    <Card variant="outlined" className="code-card">
                        <CardContent>
                            <div className="codes-item">
                                <img src={githubLogo} height={30} />
                                <div>Rest API with AWS SAM</div>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item md={6}>
                    <Card variant="outlined" className="code-card">
                        <CardContent>
                            <div className="codes-item">
                                <img src={githubLogo} height={30} />
                                <div>Rest API with AWS CKD</div>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    </div>
}

export default Codes;