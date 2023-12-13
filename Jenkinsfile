pipeline {
    agent any
    tools {nodejs "nodejs"}

    stages {
        stage('clone') {
            steps {
                checkout scmGit(branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/chaehyeon02/cabinet.git']])
            }
        }
        stage('Build and Run Docker Image') {
            steps {
                script {

                    
                    // Docker 이미지 빌드
                    sh 'docker build -t jekim12/cabinet:latest -f Dockerfile .'

                    // Docker 컨테이너 실행 (백그라운드에서 실행)
                    sh 'docker run -d -p 3000:3000 --name cabinet lch125/cabinet:latest'
                }
            }
        }
        stage('Tag and Push to Hub') {
            steps {
                script{
                     docker.withRegistry('https://index.docker.io/v1/', 'lch125') {
                            sh "docker push lch125/cabinet"
                        }                        
                                                
            }
        }
    }
}
}   
