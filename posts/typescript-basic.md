---
title: "TypeScript basic"
date: "2022-01-25"
author: "Jumier"
---

[此书](https://github.com/xcatliu/typescript-tutorial), 上关注本书

[官方手册](https://www.typescriptlang.org/docs/handbook/basic-types.html) ([中文版](https://zhongsp.gitbooks.io/typescript-handbook/content/)), 巩固知识

[Project Configuration](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) ([中文版](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/tsconfig.json.html)), 学习如何配置 TypeScript 工程

[官方示例](https://www.typescriptlang.org/docs/),学习真实项目

### 原始数据类型

JavaScript的类型分为两种：原始数据类型(Primitive data types)和对象类型(Object types).

原始数据类型包括：布尔值、数值、字符串、null、undefined以及ES6中的新类型Symbol和ES10中的新类型BigInt。

#### 布尔值
```
let isDone: boolean = false;
```

注意，使用构造函数Boolean创造的对象不是布尔值:

let createByNewBoolean: boolean = new Boolean(1);

事实上 new Boolean() 返回的是一个 Boolean 对象:

let createByNewBoolean: Boolean = new Boolean(1);

直接调用Boolean也可以返回一个boolean类型:

let createByBoolean: boolean = Boolean(1);

在Typescript中，boolean是JavaScript中的基本类型，而Boolean是JavaScript中的构造函数。
其他基本类型（除了null和undefined）一样。


### 数值

使用number定义数值类型：

let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// ES6 中二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;

### 字符串
使用 string 定义字符串类型：
let myName: string = 'Tom';
let myAge: number = 25;

// 模板字符串
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`;

其中`用来定义ES6中模板字符串，${expr}用来在模板字符串嵌入表达式。

### 空值

JavaScript 没有空值（Void）的概念，在TypeScript中，可以用void表示没有任何返回值的函数：
```
function alertName(): void {
    alert('My name is Tom');
}
```

声明一个void类型的变量没有什么用，因为你只能将它赋值为undefined和null（只在 --strictNullChecks未指定时）：
let unusable: void = undefined;

### Null和undefined

在TypeScript中，可以使用null和undefined来定义这两个原始数据类型：

let u: undefined = undefined;
let n: null      = null;

与void的区别是，undefined和null是所有类型的子类型。也就是说undefined类型的变量，可以赋值
给number类型的变量：
// 这样不会报错
let num: number = undefined;

// 这样也不会报错
let u: undefined;
let num: number = u;

而void类型的变量不能赋值给number类型的变量：
let u: void;
let num: number = u; // 报错
// Type 'void' is not assignable to type 'number'.


### 任意值

任意值（Any）用来表示允许赋值为任意类型。

什么是任意值类型

如果一个普通类型，在赋值过程中改变类型是不被允许的：
let myFavoriteNumber: string = 'seven';
myFavoriteNumber = 7;
// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.

但如果是any类型，则允许被赋值为任意类型。
let myFavoriteNumber: any = 'seven';
myFavoriteNumber = 7;

### 任意值的属性和方法
在任意值上访问任何属性都是允许的：
let anyThing: any = 'hello';
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);
也允许调用任何方法：
let anyThing: any = 'Tom';
anyThing.setName('Jerry');
anyThing.setName('Jerry').seyHello();
anyThing.myName.setFirstName('Cat');

可以认为，声明一个变量为任意值之后，对它的任何操作，返回的内容都是任意值。

### 未声明类型的变量

变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：

let something;
something = 'seven';
something = 7;

something.setName('Tom');
等价于
let something: any;
something = 'seven';
something = 7;

something.setName('Tom');

### 类型推论

如果没有明确的指定类型，那么TypeScript会依照类型推论（Type Inference）的规则推断
出一个类型。

### 什么是类型推论
以下代码虽然没有指定类型，但是会在编译的时候报错：
let myFavoriteNumber = 'seven';
myFavoriteNumber = 7;

// index.ts(2,1)：error TS2332： Type 'number' is not assignable to type 'string'.

事实上，它等价于：
let myFavoriteNumber: string = 'seven';
myFavoriteNumber = 7;

// index.ts(2,1)：error TS2332： Type 'number' is not assignable to type 'string'.

TypeScript会在没有明确的指定类型的时候推测出一个类型，这就是类型推论。

如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成any类型而完全不被类型检查：
let myFavoriteNumber;
myFavoriteNumber = 'seven'
myFavoriteNumber = 7;


------------------------------------------------------------------------------------------------

### 联合类型

联合类型（Union Types）表示取值可以为多种类型中的一种。


#### 简单的例子

```
let myFavoriteNumber: stirng | number;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;

let myFavoriteNumber: stirng | number;
myFavoriteNumber = true;

// index.ts(2,1): error TS2332: Type 'boolean' is not assignable to type 'string | number'.
//    Type 'boolean' is not assignable to type 'number'.
```

联合类型使用 ｜ 分割每个类型。

这里的 let myFavoriteNumber: string | number 的含义是，允许 myFavoriteNumber 的类型是 string 或者
number，但是不能是其他类型。

#### 访问联合类型的属性或方法

当TypeScript不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法：

```
function getLength(something: string | number): number {
    return something.length;
}
// index.ts(2,2): error TS2339: Property 'length' does not exist on type 'string | number'
// Property 'length' does not exist on type 'number'.

上例中，length不是string和number的共有属性，所以会报错。
访问string和number的共有属性是没问题的：
function getString(something: string | number): string {
    return something.toString();
}
```

联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型：
```
let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
console.log(myFavoriteNumber.length); // 5
myFacoriteNumber = 7;
console.log(myFavoriteNumber.length); // 编译时报错
// index.ts(5, 30): error TS2339: Property 'length' does not exist on type 'number'.
```


### 对象的类型-接口

在***TypeScript***中，我们使用接口（Interfaces）来定义对象的类型。

#### 什么是接口

在面向对象语言中，接口（Interface）是一个很重要的概念，它是对行为的抽象，而具体如何
行动需要由类（class）去实现（implement）。

TypeScript中的接口是一个非常灵活的概念，除了可用于对类的一部分行为进行抽象以外，
也常用于对「 对象的形状（Shape）」进行描述。

#### 简单的例子

```
interface Person {
    name: string;
    age: number;
}

let tom: Person = {
    name: 'Tom',
    age: 25
}
```

上面的例子中，我们定义了一个接口Person，接着定义了一个变量tom，它的类型是Person。这样，
我们就约束了tom的形状必须和接口Person一致。

接口一般首字母大写。有的编程语言中会建议接口的名称加上I前缀。

定义的变量比接口少了一些属性是不允许的：

```
interface Person {
    name: string;
    age: number;
}

let tom: Person = {
    name: 'Tom'
};

// index.ts(6,5): error TS2322: Type '{ name: string; }' is not assignable to type 'Person'.
//   Property 'age' is missing in type '{ name: string; }'.
```

多一些属性也是不允许的：

```
interface Person {
    name: string;
    age: number;
}

let tom: Person = {
    name: 'Tom',
    age: 25,
    gender: 'male'
};

// index.ts(9,5): error TS2322: Type '{ name: string; age: number; gender: string; }' is not assignable to type 'Person'.
//   Object literal may only specify known properties, and 'gender' does not exist in type 'Person'.
```

可见，赋值的时候，变量的形状必须和接口的形状保持一致。


#### 可选属性

有时我们希望不要完全匹配一个形状，那么可以用可选属性：
```
interface Person {
    name: string;
    age?: number;
}

let tom: Person = {
    name: 'Tom'
};
interface Person {
    name: string;
    age?: number;
}

let tom: Person = {
    name: 'Tom',
    age: 25
};
```
可选属性的含义是该属性可以不存在。

这时***仍然不允许添加未定义的属性***：

```
interface Person {
    name: string;
    age?: number;
}

let tom: Person = {
    name: 'Tom',
    age: 25,
    gender: 'male'
};

// examples/playground/index.ts(9,5): error TS2322: Type '{ name: string; age: number; gender: string; }' is not assignable to type 'Person'.
//   Object literal may only specify known properties, and 'gender' does not exist in type 'Person'.
```

#### 任意属性

有时候我们希望一个接口允许有任意的属性，可以使用如下方式：
```
interface Person {
    name: string;
    age?: number;
    [propName: string]: any;
}

let tom: Person = {
    name: 'Tom',
    gender: 'male'
}
```
使用[propName: string]定义了任意属性取string类型的值。

需要注意的是，***一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集：***
```
interface Person {
    name: string;
    age?: number;
    [propName: string]: string;
}

let tom: Person = {
    name: 'Tom',
    age: 25,
    gender: 'male'
};

// index.ts(3,5): error TS2411: Property 'age' of type 'number' is not assignable to string index type 'string'.
// index.ts(7,5): error TS2322: Type '{ [x: string]: string | number; name: string; age: number; gender: string; }' is not assignable to type 'Person'.
//   Index signatures are incompatible.
//     Type 'string | number' is not assignable to type 'string'.
//       Type 'number' is not assignable to type 'string'.
```
上例中，任意属性的值允许是 string，但是可选属性 age 的值却是 number，number 不是 string 的子属性，所以报错了。

另外，在报错信息中可以看出，此时 { name: 'Tom', age: 25, gender: 'male' } 的类型被推断成了 { [x: string]: string | number; name: string; age: number; gender: string; }，这是联合类型和接口的结合。

一个接口中只能定义一个任意属性。如果接口中有多个类型的属性，则可以在任意属性中使用联合类型：
```
interface Person {
    name: string;
    age?: number;
    [propName: string]: string | number;
}

let tom: Person = {
    name: 'Tom',
    age: 25,
    gender: 'male'
};
```

#### 只读属性

有时候我们希望对象中的一些字段只能在创建的时候被赋值，
那么可以用readonly定义只读属性：
```
interface Person {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any;
}

let tom: Person = {
    id: 89757,
    name: 'Tom',
    gender: 'male'
};

tom.id = = 89757;

// index.ts(14,5): error TS2540: Cannot assign to 'id' because it is a constant or a read-only property.
```

上例中，使用 readonly 定义的属性 id 初始化后，又被赋值了，所以报错了。

***注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候：***
```
interface Person {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any;
}

let tom: Person = {
    name: 'Tom',
    gender: 'male'
};

tom.id = 89757;

// index.ts(8,5): error TS2322: Type '{ name: string; gender: string; }' is not assignable to type 'Person'.
//   Property 'id' is missing in type '{ name: string; gender: string; }'.
// index.ts(13,5): error TS2540: Cannot assign to 'id' because it is a constant or a read-only property.
```
上例中，报错信息有两处，第一处是在对 tom 进行赋值的时候，没有给 id 赋值。

第二处是在给 tom.id 赋值的时候，由于它是只读属性，所以报错了。


### 数组的类型

在TypeScript中，数组类型有多种定义方式，比较灵活。

#### 「类型 + 方括号」表示法
最简单的方法是使用「类型 + 方括号」来表示数组“
```
let fibonacci: number[] = [1, 1, 2, 3, 5];
```

数组的项中***不允许***出现其他的类型：
```
let fibonacci: number[] = [1, '1', 2, 3, 5];

// Type 'string' is not assignable to type 'number'.
```

数组的一些方法的参数也会根据数组在定义时约定的类型进行限制：
```
let fibonacci: number[] = [1, 1, 2, 3, 5];
fibonacci.push('8');

// Argument of type '"8"' is not assignable to parameter of type 'number'.
```
上例中，push 方法只允许传入 number 类型的参数，但是却传了一个 "8" 类型的参数，所以报错了。这里 "8" 是一个字符串字面量类型，会在后续章节中详细介绍。

#### 数组泛型

我们也可以使用数组泛型（Array Generic）Array<elemType> 来表示数组：
```
let fibonacci: Array<number> = [1, 1, 2, 3, 5];
```

#### 用接口表示数组

接口也可以用来描述数组：

```
interface NumberArray {
    [index: number]: number;
}
let fibonacci: NumberArray = [1, 1, 2, 3, 5];
```
NumberArray 表示：只要索引的类型是数字时，那么值的类型必须是数字。

虽然接口也可以用来描述数组，但是我们一般不会这么做，因为这种方式比前两种方式复杂多了。

不过有一种情况例外，那就是它常用来表示类数组。

#### 类数组

类数组（Array-like Object）不是数组类型，比如 arguments：

```
function sum() {
    let args: number[] = arguments;
}

// Type 'IArguments' is missing the following properties from type 'number[]': pop, push, concat, join, and 24 more.
```
上例中，arguments 实际上是一个类数组，不能用普通的数组的方式来描述，而应该用接口：
```
function sum() {
    let args: {
        [index: number]: number;
        length: number;
        callee: Function;
    } = arguments;
}
```
在这个例子中，我们除了约束当索引的类型是数字时，值的类型必须是数字之外，也约束了它还有 length 和 callee 两个属性。

事实上常用的类数组都有自己的接口定义，如 IArguments, NodeList, HTMLCollection 等：
```
function sum() {
    let args: IArguments = arguments;
}
```
其中 IArguments 是 TypeScript 中定义好了的类型，它实际上就是：
```
interface IArguments {
    [index: number]: any;
    length: number;
    callee: Function;
}
```
关于内置对象，可以参考内置对象一章。

#### any 在数组中的应用
一个比较常见的做法是，用 any 表示数组中允许出现任意类型：
```
let list: any[] = ['xcatliu', 25, { website: 'http://xcatliu.com' }];
```

### 函数类型

>函数是JavaScript中的一等公民

#### 函数声明

在JavaScript中，有两种常见的定义函数的方式-函数声明（Function Declaration）和函数表达式（Function Expression）：
```
// 函数声明（Function Declaration）
function sum(x, y) {
    return x + y;
}

// 函数表达（Function Expression）
let mySum = function(x, y) {
    return x + y;
}
```

一个函数有输入和输出，要在 TypeScript 中对其进行约束，需要把输入和输出都考虑到，其中函数声明的类型定义较简单：
```
function sum(x: number, y: number): number {
    return x + y;
}
```
注意，***输入多余的（或者少于要求的）参数，是不被允许的：***
```
function sum(x: number, y: number): number {
    return x + y;
}
sum(1, 2, 3);

// index.ts(4,1): error TS2346: Supplied parameters do not match any signature of call target.
function sum(x: number, y: number): number {
    return x + y;
}
sum(1);

// index.ts(4,1): error TS2346: Supplied parameters do not match any signature of call target.
```

#### 函数表达式

如果要我们现在写一个对函数表达式（Function Expression）的定义，可能会写成这样：
```
let mySum = function (x: number, y: number): number {
    return x + y;
}
```
这是可以通过编译的，不过事实上，上面的代码只对等号右侧的匿名函数进行了类型定义，而等号左边的 mySum，是通过赋值操作进行类型推论而推断出来的。
如果需要我们手动给 mySum 添加类型，则应该是这样：

let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};
注意不要混淆了 TypeScript 中的 => 和 ES6 中的 =>。

在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。

在 ES6 中，=> 叫做箭头函数，应用十分广泛，[可以参考 ES6 中的箭头函数](https://es6.ruanyifeng.com/#docs/function#%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0)。


#### 用接口定义函数的形状

我们也可以使用接口的方式来定义一个函数需要符合的形状：
```
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    return source.search(subString) !== -1;
}
```
采用函数表达式|接口定义函数的方式时，对等号左侧进行类型限制，可以保证以后对函数名
赋值时保证参数个数、参数类型、返回值类型不变。


#### 可选参数

前面提到，输入多余的（或者少于要求的）参数，是不允许的。那么如何定义可选的参数呢？

与接口中的可选属性类似，我们用 ? 表示可选的参数：
```
function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + ' ' + lastName;
    } else {
        return firstName;
    }
}
let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom');
```
需要注意的是，可选参数必须在必需参数后面。换句话说，***可选参数后面不允许再出现必需参数了：***
```
function buildName(firstName?: string, lastName: string) {
    if (firstName) {
        return firstName + ' ' + lastName;
    } else {
        return lastName;
    }
}
let tomcat = buildName('Tom', 'Cat');
let tom = buildName(undefined, 'Tom');

// index.ts(1,40): error TS1016: A required parameter cannot follow an optional parameter.
```

#### 参数默认值

在ES6中，我们允许给函数的参数添加默认值，***TypeScript会将添加了默认值的参数识别为可选参数：***
```
function buildName(firstName: string, lastName: string = 'Cat') {
    return firstName + ' ' + lastName;
}
let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom');
```
此时就不受「可选参数必须接在必需参数后面」的限制了：
```
function buildName(firstName: string = 'Tom', lastName: string) {
    return firstName + ' ' + lastName;
}
let tomcat = buildName('Tom', 'Cat');
let cat = buildName(undefined, 'Cat');
```

>关于默认参数，可以参考[ES6中函数参数的默认值](https://es6.ruanyifeng.com/#docs/function#%E5%87%BD%E6%95%B0%E5%8F%82%E6%95%B0%E7%9A%84%E9%BB%98%E8%AE%A4%E5%80%BC)


#### 剩余参数

ES6中，可以使用 ...rest的方式获取函数中的剩余参数（rest参数）：
```
function push(array, ...items) {
    items.forEach(function(item){
        array.push(item);
    });
}

let a: any[] = [];
push(a, 1, 2, 3);
```
事实上，items是一个数组。所以我么可以用数组的类型来定义它：
```
function push(array: any[], ...items: any[]) {
    items.forEach(function(item) {
        array.push(item);
    });
}

let a = [];
push(a, 1, 2, 3);
```

注意，rest参数只能是最后一个参数，关于rest参数，可以参考[ES6中的rest参数](https://es6.ruanyifeng.com/#docs/function#rest%E5%8F%82%E6%95%B0)。

#### 重载

重载允许一个函数接受不同数量或类型的参数时，作出不同的处理。

比如，我们需要实现一个函数 reverse，输入数字 123 的时候，输出反转的数字 321，输入字符串 'hello' 的时候，输出反转的字符串 'olleh'。

利用联合类型，我们可以这么实现：
```
function reverse(x: number | string): number | string | void {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
```
然而这样有一个缺点，就是不能够精确的表达，输入为数字的时候，输出也应该为数字，输入为字符串的时候，输出也应该为字符串。

这时，我们可以使用重载定义多个 reverse 的函数类型：
```
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | void {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
```
上例中，我们重复定义了多次函数 reverse，前几次都是函数定义，最后一次是函数实现。在编辑器的代码提示中，可以正确的看到前两个提示。

注意，TypeScript 会优先从最前面的函数定义开始匹配，所以多个函数定义如果有包含关系，需要优先把精确的定义写在前面。