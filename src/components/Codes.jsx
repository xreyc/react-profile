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
					<div className="service-name">Sample Applications</div>
				</div>
			</div>
			<Grid container spacing={2}>
				<Grid item md={6}>
					<Card variant="outlined" className="code-card">
						<CardContent>
							<div
								className="codes-item"
								onClick={() => window.open('https://github.com/node-auth/node-auth-server', '_blank')}
							>
								<img src={githubLogo} height={30} />
								<div>Token Based Authentication and Oauth2 with NodeJS</div>
							</div>
						</CardContent>
					</Card>
				</Grid>

				<Grid item md={6}>
					<Card variant="outlined" className="code-card">
						<CardContent>
							<div
								className="codes-item"
								onClick={() => window.open('https://github.com/xreyc/serverless-framework', '_blank')}
							>
								<img src={githubLogo} height={30} />
								<div>Event Driven Architecture with Serverless Framework</div>
							</div>
						</CardContent>
					</Card>
				</Grid>

				<Grid item md={6}>
					<Card variant="outlined" className="code-card">
						<CardContent>
							<div
								className="codes-item"
								onClick={() => window.open('https://github.com/lablexer', '_blank')}
							>
								<img src={githubLogo} height={30} />
								<div>Healthcare Application with HL7 and ICD10 Standards</div>
							</div>
						</CardContent>
					</Card>
				</Grid>
			</Grid>

		</div>
	</div>
}

export default Codes;