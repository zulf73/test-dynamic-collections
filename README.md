Uncaught Error: Converting circular structure to JSON
    at Object.stringify (utils.js:32)
    at stringify (reactive-dict.js:9)
    at ReactiveDict.set (reactive-dict.js:94)
    at CollFactory.create (collfactory.js:33)
    at Object.submit form (body.js:11)
    at template.js:539
    at Function.Template._withTemplateInstanceFunc (template.js:490)
    at Blaze.View.<anonymous> (template.js:538)
    at view.js:879
    at Object.Blaze._withCurrentView (view.js:533)
(anonymous) @ utils.js:32
stringify @ reactive-dict.js:9
set @ reactive-dict.js:94
create @ collfactory.js:33
submit form @ body.js:11
(anonymous) @ template.js:539
Template._withTemplateInstanceFunc @ template.js:490
(anonymous) @ template.js:538
(anonymous) @ view.js:879
Blaze._withCurrentView @ view.js:533
(anonymous) @ view.js:878
(anonymous) @ events.js:47
dispatch @ modules.js?hash=944c06117b892deea0c75e0371e5c25c6623b132:7035
elemData.handle @ modules.js?hash=944c06117b892deea0c75e0371e5c25c6623b132:6839
