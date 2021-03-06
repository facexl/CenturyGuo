---
title: '关于这次阿里面试的总结'
date: '2019-02-24'
tag: 杂谈
---

> 这是一篇关于阿里面试的总结，若有不礼貌的地方欢迎[联系我](mailto:guoshencheng1@gmail.com)修改或者隐藏相关部分的内容。

---

> 我是一个前端开发工程师，大概是从2018年年尾开始，陆续面了蚂蚁金服和口碑两个部门，蚂蚁金服三面过了之后最后因为hc问题被拒之门外，之后简历被口碑在内网捞到，又经过三轮面试，最后进了口碑，有很多朋友逐个的问了我关于这次面试的经历，本人自觉疏忽了这点，由于面试已是若干月之前的事情，所以本身对这次面试的经历已经比较模糊，只能记住个大概，因此对读者的帮助也是有限的。


阿里的面试流程总的来说是三面，至少我这儿看来是这样的。听闻有些朋友会在面试中遇到需要线上笔试的环节，这在我这次的面试经历中没有体现所以不会赘述。一般来说开头都会让你介绍一下自己，然后面试官会根据你的简历和你的介绍中的知识点对你进行发问。因此掌握自己吹的"牛逼"很重要，其次才是和面试官的"见招拆招"。

---

接下来我会阐述我遇到的一些面试题，时间问题不是很全请见谅。

### 蚂蚁金服

> 蚂蚁金服现在的前端架构应该正在向vue发展，因此面试官一般也会分为三类，一类是专注vue的，一类是专注react的，还有一类是全精通的，假如说面试官在你所掌握的领域非常精通，那好处就是他会引导你去回答问题，坏处就是你的基础知识和对这门技术的深层理解很容易就被看出来。假如面试官并不是精通你的领域的，那么你这个领域的深层理解可能就不容易被发现，但是你需要主动去输出一些通用知识(javascript层面，脚手架层面，设计模式等等)，如果你没有主动去输出，很有可能会很尬。

#### 一面

> 假如要实现一个进度条，你会用什么方式？

这道题目我当场其实是很困惑的，后来查询相关知识之后知道这是一道页面重绘/回流的问题。一般来说可能会修改元素的宽度但是元素的宽度修改会触发页面的回流会影响性能。所以需要另外寻找解决方案来优化

> 页面在刚开始的时候会请求一些数据，有一些数据我们其实并不用每次都去获取或者说不用第一时间去获取，但是页面加载确实需要这些数据，假如我们采用本地存储的方式将一些数据缓存下来，我们应该怎么做这个缓存及更新逻辑?

我的想法是将这类需要缓存的请求打标，在请求的处理函数中，进行以下伪代码的逻辑:

```javascript
function request() {
  if (/* 本地含有这个数据 */) {
    const listener = new UpdateDataListener(() => /* 更新缓存并通知数据更新 */)
    sendRequestAsync(listener.call)
    return Promise.resolve(/* 本地数据 */)
  } else {
    return new Promise((resolve, reject) => {
      return sendRequestAsync(resolve)
    })
  }
}
```
需要注意的是，在存储本地这块，我们需要区分用户，防止在不同用户登入登出的情况下会出现问题。


#### 二面

> 请实现一下队列和栈，注意他们的操作效率。

这个问题首先要看的是你对队列和栈的理解，我们都知道，队列是先进先出，栈是先进后出，我们应该用最合适的数据结构来实现他们从而达到对这两种数据结构在操作时的时间复杂度和空间复杂度最低。

> 请简单的实现一下观察者模式。

这个问题首先考验你对设计模式的理解，然后是实现能力，我的实现逻辑大致是以下伪代码的逻辑:

```javascript
class Obable {
  handlers = []
  on(event, handler) {
   this.handlers.push({
    event, handler
   })
  }
  call(event, ...args) {
   this.handlers.filter(item => item.event === event).foreach(item => item.handler(...args))
  }
}
```

#### 三面

> 蚂蚁金服的三面抽到了技术部大佬，和一个HR一起面试我的，会问一下个人发展方面的问题，技术方面的没啥。。。

### 口碑

> 口碑可以说现在的技术栈还在使用react，但是用的是preact，现在大厂的这些行为主要是上次React协议风波给吓的。


#### 一面的问题都给忘了，，对不起大家了。。。

#### 二面

二面是现场，没想到的是有两个技术人员对我进行面试，时长大概达到了3小时。

> 如同这种列表(长列表)，你能想到有哪些优化需要优化它?

长列表问题是一个普遍性问题，很多业务可能确实在开发的时候忽略它，但是在用户操作极端或者数据量达到一定程度的情况下，会对页面性能造成影响。

内存问题：数据量很大的情况下，如果不停加载数据，就会不停开销内存来创建元素，在使用一段时间之后，浏览器的内存会被占满，从而影响性能问题，我们可以模仿iOS的tableview的做法，针对屏幕上的元素进行估算，比如我们通过估算后，发现屏幕上能够显示的元素只有5个，那么我们只需要创建6-8个元素，除了屏幕上的元素之外的元素都会被放入一个重用池，我们在移动页面的时候，会根据页面的offset来判断是否有新的元素需要被放置在页面上，我们可以从重用池中取出一个元素，放置到页面上，这样我们的页面内存就不会随着数据的增加而不断上升从而导致的性能问题。

cpu性能：我们前面也有提及要判断offset，而监听这个值的地方在于监听屏幕滚动的事件，而屏幕滚动的事件是非常频繁的，我们不可能每次都去计算，那么我们需要一种机制来提升这部分性能，答案很通常的就是使用throttle。包括如果元素在屏幕范围内我们会新增一些逻辑，比如异步请求一些数据或者渲染一张图标等等，我们都可以用throttle来解决这个问题，防止不必要的cpu消耗。

> 首屏加载可以做哪些优化?

首屏加载的速度主要是资源加载的问题，首先我们要对资源最分割，可以通过Chrome的coverage工具来查看我们加载的js的使用率，如果使用率非常低的话，说明很多js我们可以通过在确实需要使用某些功能的时候异步加载进来，利用这种方式我们可以减小javascript文件的大小从而加快首屏的加载速度。

此外，我们需要分割资源的域名和请求的域名，因为请求往往挟带cookie，这些cookie会平白增加请求包的大小，这也会影响资源的加载速度。

如果有条件的话，我们可以对资源的服务开启http2，因为http2能对同域名下的请求同时处理，且不需要多次建立链接，减少了握手所消耗的时间也会有利于加快首屏加载速度。

资源的问题解决了之后就是请求的问题，api请求尽量减少请求体的数据或者通过缓存的方式，加快渲染。

> 一个单页应用需要什么，能简单的实现一下吗？

需要实现的我觉得应该是路由方面，如何监听路由的改动，然后在路由修改的时候更新页面，就是作为一个单页应用需要做的事情，而至于如何更新页面，那就是React或者vue这类框架应该完成的事情了。实现的代码当时是写在黑板上的，写了很多，刚开始有很多漏洞，但是逐步的指正后逐步修复，最后代码就不在这里呈现了(忘的有点差不多了吧)。主要做了一个支持嵌套使用的路由监听功能。

#### 三面

题目大致和三面差不多。。。关于长列表的，多余的聊了很多关于React-native和各种小程序的东西，并不是了解很多所以就草草略过了


---

写的比较水可能是时间太长所以很多问题都被我忘记掉了，记忆中就剩下这些问题，帮助有限，各位好运。欢迎来当同事!
