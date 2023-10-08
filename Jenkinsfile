pipeline {

    agent any

    stages {
        stage('build') {
            steps{
                sh 'npm i'
            }
        }
        stage ('inject Variable'){
            steps{
                withCredentials([file(credentialsId: 'file', variable: 'PIPELINE_ENV')]) { load "$PIPELINE_ENV"}
                sh 'echo ${appsettings} | base64 --decode > .env'
                sh 'ls -a'
                    
                }
            }
            
        }
    }
