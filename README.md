# web-client2-

This directory contains rough sketch of Finnest Web App front-end.

To run the project

1). npm install
2). npm run build
 (if there's warning about export 'BrowserRouter' and some other scripts not found in react-router, run 'npm install -save react-router@4.0.0-alpha.6' and then run 'npm run build' again)
3). npm run dev
4). open your browser and navigate to localhost:8080

Basic User Flow:

															  -> register a kid
home page -> sign in -> (another sign up entrance here)log in -> make a transfer
		 ↓													  -> track history
		  -> sign up -> sign up complete ->log in
		  			 ↓*					↑*	
		  			 ->read term of use 