### All about redux
Redux -> JS To manager state of each component
Flux - React Redux
## Khi khong co redux se nhu the nao

View
Action
Store
    + Dispatcher
    + Reducer
    + State

Step:
1/ Actions
2/ Reducers
3/ Component
4/ Containers
5/ Store

Tools:
React native debugger

// async await for react (like promise)
redux-thunk
redux-promise
redux-saga
    + Advance (Game online) complicated async
    + 

Cach to chuc cay thu muc trong redux app
+ modules
    - Nhu la mot ung dung con (actions, reducers, containers, Components)
    -
+ navigators
    - Nhung cac Container vao cac screen 
    - Neu su dung navigation thi minh can phai truyen options navigation vao cho Container de handle
## 19/06/2018
Firebase
    + Cloud Firestore: luu du lieu vao cloud, no-sql
    + Authentication
    + Hosting
    + Cloud Storage : Chua cac file media
    + Realtme Database
    + Cloud messaging
    + Remote config: Config cac parameter tu xa, co the thiet lap condition de apply config change
    + Dynamic links: Click vao link thi mo app den screen cu the (nhu minh da cau hinh)
    + Cloud function : viet function khong qua server, sau do deploy len server. Co the them cac package khac vi du nhu la: expressjs
#21/06/2018
ReactNative Firebase
    + Realtime (FireStore)
    + Notification (Remote / Local)

---------------------------------------------------------
Set project parameters to:
---------------------------------------------------------
Project name:  RNNotif
Company name:  curvecode
Package name:  com.curvecode.rnnotif
---------------------------------------------------------


---------------------------------------------------------
Set project parameters to:
---------------------------------------------------------
Project name:  firstRNFirebase
Company name:  curvecode
Package name:  com.curvecode.firstrnfirebase
---------------------------------------------------------

RN Firebase
    - ForeGround : Dang bat
    - Background : Dang chay ngam


Cac bai tap can lam:
    + Firestore on firebase with Todos App
        - Get / Add / Update / Delete todo real time when DidMount, WillMount and UnMount

    + Push notification : register token and receive notification
        - Remote : Goi tu API
        - Local Notification: Dat lich schedule cho no de display notification len
    Co hai loai notification:
        + Notification: Display on status bar of device foreground & background
        + DataMessage: Chi xuat hien cho truong hop foreground (dang dung)


Dich vu dam may ve notification cho web : OneSignal, AWS, MS

- Khi app dang killer co message den thi khi click vao notification thi se co su kien getInitialNotification
