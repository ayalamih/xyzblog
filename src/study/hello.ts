function sayHello(person: string) {
    // 如果我们需要保证运行时的参数类型，还是得手动对类型进行判断:
    if (typeof person === 'string') {
        return 'Hello, ' + person;  
    } else {
        throw new Error('person is not a string');
    }
}

let user = 'Tom';
console.log(sayHello(user));

export {}