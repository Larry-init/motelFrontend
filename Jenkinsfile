pipeline {
    agent any
     
    stages {
        stage('Ok') {
            steps {
                echo "Ok"
            }
        }
    }
    post {
        always {
            emailext(
  subject: "foo",
  to: "mlanreadeniji@gmail.com",
  body: """<p>FAILED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]':</p>
  <p>Console output (last 250 lines):<hr><pre>\${BUILD_LOG}</pre></p>""" )

        }
    }
}
