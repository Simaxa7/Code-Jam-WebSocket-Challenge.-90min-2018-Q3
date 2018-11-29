# Code-Jam-WebSocket-Challenge-90min-2018-Q3

1. запустил inex.html

2. пришло в консоль
{"message":"You successfully accept challenge","next":"arithmetic","token":"8b1ebc1314b8f792"}

3. взял полученный ид для меня "token":"8b1ebc1314b8f792"
4. взял название задачи "next":"arithmetic"

5. отправил запрос на получения условий к полученной задаче
т.е. в консоле написал

ws.send(JSON.stringify({
  "token": "8b1ebc1314b8f792", 
  "command": "arithmetic"
}));

6. получил ответ в консоль 
{"name":"arithmetic","task":{"sign":"*","values":[177,14,211,136]}}

7. полученного задания видно "sign":"*" - надо переиножить все что
находится "values":[177,14,211,136]
перемножаем (я на калькуляторе) получаю цифру  71108688

8. ответ посчитали надо отправить решение

ws.send(JSON.stringify({
  "token": "8b1ebc1314b8f792", 
  "command": "arithmetic",
  "answer": 71108688
}));

9. получили сразу ответ 
{"error":true,"message":"Your solution for task arithmetic is wrong"}
{"message":"You solve the task","next":"function_evaluation"}

"message":"Your solution for task arithmetic is wrong" решили не верно
пересчитываем, проверяем где ошибка

"message":"You solve the task" - решили верно
"next":"function_evaluation" - для получения след задания

10. отправляем запрос на след задание

ws.send(JSON.stringify({
  "token": "8b1ebc1314b8f792", 
  "command": "function_evaluation"
}));


11. прилетел ответ
{"name":"function_evaluation","task":{"fn":"(function function_evaluation() { return 31 + 84; })"}}
просят вернуть результат вычисления { return 31 + 84; } // 115

12. ответ посчитали надо отправить решение

ws.send(JSON.stringify({
  "token": "8b1ebc1314b8f792", 
  "command": "function_evaluation",
  "answer": 115
}));

13. прилетел ответ (решение верное и след название задачи)
{"message":"You solve the task","next":"binary_arithmetic"}

14. отправляем запрос на след задание

ws.send(JSON.stringify({
  "token": "8b1ebc1314b8f792", 
  "command": "binary_arithmetic"
}));

15. прилетел ответ 
{"name":"binary_arithmetic","task":{"bits":8}}

и вот такой объект
	[[Int8Array]]: Int8Array(16) [78, -21, 94, 69, -20, -25, 91, -85, 45, -35, -5, 48, 62, -110, -39, 57]
	[[Int16Array]]: Int16Array(8) [-5298, 17758, -6164, -21669, -8915, 12539, -28098, 14809]
	[[Int32Array]]: Int32Array(4) [1163848526, -1420040212, 821812525, 970560062]
	[[Uint8Array]]: Uint8Array(16) [78, 235, 94, 69, 236, 231, 91, 171, 45, 221, 251, 48, 62, 146, 217, 57]


16. если {"bits":8} надо вернуть сумму этого массива
[[Uint8Array]]: Uint8Array(16) [78, 235, 94, 69, 236, 231, 91, 171, 45, 221, 251, 48, 62, 146, 217, 57]

17. ответ посчитали надо отправить решение
  ws.send(JSON.stringify({
    "token": "8b1ebc1314b8f792", 
    "command": "binary_arithmetic",
    "answer": 2252
  }));

18. прилетел ответ что решение верное
19. отправляем
  ws.send(JSON.stringify({
    "token": "8b1ebc1314b8f792", 
    "command": "win"
  }));
20. прилетел ответ с секретным кодом  

21. отправляем свой гитхаб и секретный код в эту форму

// https://docs.google.com/forms/d/e/1FAIpQLScZAYsOS4LIJbNxKuxuKztmfmDGW3lqucTfMWyKAYvE9thRFA/viewform?fbzx=7230593784880271000
Your github nickname *	
Your secret win code *  {"secretCode":"222222222222222222222"}
