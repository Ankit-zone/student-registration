pipeline {

    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out project from GitHub...'
                checkout scm
            }
        }

        stage('Check Project Files') {
            steps {
                echo 'Checking required project files...'

                bat '''
                    if not exist index.html exit /b 1
                    if not exist style.css exit /b 1
                    if not exist script.js exit /b 1
                    if not exist test_html.py exit /b 1

                    echo All required files are present.
                '''
            }
        }

        stage('Run HTML Tests') {
            steps {
                echo 'Running HTML validation tests...'

                bat '''
                    python test_html.py
                '''
            }
        }

        stage('Build Successful') {
            steps {
                echo '========================================'
                echo '     BUILD AND TEST SUCCESSFUL'
                echo '========================================'
                echo 'Student Registration Dashboard is valid!'
            }
        }
    }

    post {

        success {
            echo 'Jenkins Pipeline completed successfully!'
        }

        failure {
            echo 'Jenkins Pipeline failed!'
            echo 'Please check the test output.'
        }

        always {
            echo 'Jenkins build completed.'
        }
    }
}