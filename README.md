# games-find

# Setup and Installation
`npm install`

# To start
`npm start`

# To verify
1. Use postman and select `POST` as HTTP type and `URL` as http://localhost:9000/search.
2. In body pass in the `title` and `index` (these two keys are send by client, the value of index get's changed by the frontend on scrolling).
3. Attached is a screenshot to setup postman.

# For jenkins
1. Need to have jenkins pipeline setup and defying the branch.
2. Need to change the jenkins.pipeline file and replace it with `your-bucket-name`, `your-key`, `your-region-host`.
3. Other stage should be added after installing dependency to run the test cases. All the test cases will be exccute that are inside the test folder with file name test.js
`
stage('Run the test') {
            steps {
                sh 'npm test'
            }
        }
`.
4. That will ensure that the it deploys if and only if all the test cases are passed.