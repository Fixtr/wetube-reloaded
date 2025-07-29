#2.0 Your First NodeJs Project
(1)json이란, 프로그래머가 파일에 정보를 저장하기 위해 만든 방식 중 하나

#2.1 Installing Express
(1) node js파일명 --> 이 방법으로도 js파일을 실행시킬 수 있다
(2) 이번 프로젝트에서는 package.json으로 실행 해 줄것이다
(3) package.json 안에 main --> 내가 만들고 배포한 package를 다른 사람들이 설치하면 main을 사용한다(이번 프로젝트에서는 필요없음)
(4) package.json 안에 scripts를 만들어 준다
(5) scripts 는 실행하고 싶을 것을 말한다 즉, scripts안에 실행할 것을 적어준다
ex) scripts={
"start": "node index.js" // 이름은 자유롭게 지어줄 수 있다
}
(6) 그 후 npm run start 로 실행시킬 수 있다 // package.json이 존재하는 폴더 한정
(7) npm install express 로 Express 패키지를 다운로드 받는다
(8) node_modules, package-lock.json 파일이 생성된다
(9) node_modules 에는 npm으로 설치한 모든 패키지가 저장된다
(10) express 는 혼자 작동되지 않기에 다른 패키지가 필요하다
(11) node_modules 안에 express 안에 존재하는 package.json안에 dependencies는 express가 작동되기위해 필요한 패키지들을 나타낸다
(12) express를 설치하는데 의존하고 있는 패키지가 있기 때문에 npm i express를 하면 그것들도 함께 설치된다
(13) npm i express 를 했을 때 npm 이 알아서 dependencies에 express를 추가해준다

#2.2 Understanding Dependencies
(1) 프로젝트를 공유하고 싶으면 index.js와 package.json, package-lock.json만 보내주면 된다 npm이 json 파일을 보고 dependencies를 찾아서 알아서 설치해줄것이기 때문이다.
(2) npm install을 할때는 package.json 을 저장하고 실행해야 오류가 나지 않는다

#2.3 The Tower of Babel
(1) dependencies는 프로젝트에 필요한 도구, devDependencies는 개발자에게 필요한 도구
(2) babel은 최신 js로 작성하고 nodejs에서 컴파일해준다

#2.4 Nodemon
(1) nodemon 패키지를 사용하여 babel.js를 사용하면 매번 재시작할 필요없이 파일을 수정할 때마다 알아서 재시작해준다.

#3.0 Your First Server
(1) 서버는 항상 켜져있는 컴퓨터와 같다. request를 listening 하고 있다. 
(2) callback이란, 서버가 시작될 때 작동하는 함수
(3) port란, 컴퓨터의 창문 몇몇 port들은 인터넷에 연결되어 있다. 
(4) 서버를 시작하면 보통 localhost를 통해 접속할 수 있다.

#3.1 GET Requests part One
(1) /는 서버의 root, 혹은 첫 페이지를 말한다. google.com에 접속하면 google.com/에 접속하는 것과 똑같음
(2) GET은 HTTP method, 웹사이트가 브라우저로 오게 하는 방법
(3) http는 우리가 서버와 소통하는 방법, 서버가 서로 소통하는 방법
(4) 브라우저가 우리를 대신해서 웹사이트를 request하고, 페이지를 가져다 준다.

#3.2 GET Requests part Two
(1) application에게 get request애 응답하는 방법 등을 가르치고, 외부에 개방한다.
(2) root page로 get request를 보낼 때, 함수를 보내야 하며, 그렇지 않으면 에러가 발생한다.

#3.3 Responses
(1) express에선, route handler에는 event는 없지만 두 object가 있다. request, response 이름은 상관없지만, 둘 다 들어가야 한다.
(2) request를 종료시키는 방법 : request를 받아서 respond를 한다. 1. return res.end(); 2. return res.send();
(3) 브라우저가 request를 보내고 우리가 받으면 응답을 해주면 된다.