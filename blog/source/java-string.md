title: "java学习笔记 String、StringBuilder、StringBuffer"
date: 2017-06-09 22:30:00 +0800
update: 2017-06-09 22:30:00 +0800
author: me
tags:
    - java
    - String
    - StringBuilder
    - StringBuffer
preview: 在java里面，常用的字符串类包括String、StringBuilder和StringBuffer，之前看过很多这三个类的比较，但是印象一直不深，直到有一次在线上做题，发现相同操作String花费了185ms，而StringBuilder值用了18ms，才意识到它们差别。

---

## 常用语法差异
1. **初始化** 
    - String : String的初始化可以通过`String string = new String("a")` 或 `String string = "a"` 实现，它们是有差别的，在这里就不再阐述了
    - StringBuilder : 只能通过`StringBuilder stringBuilder = new StringBuilder("a")`初始化
    - StringBuffer :  只能通过`StringBuffer stringBuffer = new StringBuffer("a")`初始化

2. **字符串修改**
    - String : String是不可变的，从它的定义可见

    ```java
    public final class String implements java.io.Serializable, Comparable<String>, CharSequence {
         private final char value[];
         //......
    }
    ```
    所以它每次修改都是创建了一个新的字符串。他的修改过程: 首先创建一个StringBuffer，然后调用StringBuffer的`append()`方法，最后调用StringBuffer的`toString()`方法返回

    ``` java
    String s = "hello";
    s += "world";
    //等价于
    StringBuffer sb = new StringBuffer("hello");
    sb.append("world");
    s = sb.toString();
    ```

    - StringBuilder和StringBuffer : 他们是调用`append()`方法

    ```java
    //StringBuffer
    @Override
    public synchronized StringBuffer append(String str) {
        toStringCache = null;
        super.append(str); //它的父类是AbstractStringBuilder
        return this;
    }

    //StringBuilder
    @Override
    public StringBuilder append(String str) {
        super.append(str); //它的父类是AbstractStringBuilder
        return this;
    }
    //他们的操作很相似，差异在于StringBuffer做了同步，是线程安全的

    ```

## 效率差异
我做了一个小实验，分别对String、StringBuffer和StringBuilder修改10000次，查看他们花费的时间。
``` java
    public static void main(String[] args) {
        testString();
        testStringBuffer();
        testStringBuilder();
    }
    
    public static void testString() {
        String a = "hello";
        String b = "world";
        long start = System.currentTimeMillis();
        for(int i = 0 ; i < 10000 ; i++) {
            a += b;
        }
        long end = System.currentTimeMillis();
        
        System.out.println("String: " + (end - start));
    }
    
    public static void testStringBuffer() {
        StringBuffer a = new StringBuffer("hello");
        String b = "world";
        long start = System.currentTimeMillis();
        for(int i = 0 ; i < 10000 ; i++) {
            a.append(b);
        }
        long end = System.currentTimeMillis();
        
        System.out.println("StringBuffer: " + (end - start));
    }
    
    public static void testStringBuilder() {
        StringBuilder a = new StringBuilder("hello");
        String b = "world";
        long start = System.currentTimeMillis();
        for(int i = 0 ; i < 10000 ; i++) {
            a.append(b);
        }
        long end = System.currentTimeMillis();
        
        System.out.println("StringBuilder: " + (end - start));  
    }
```

它的输出结果:
```out
String: 236
StringBuffer: 1
StringBuilder: 1
```

不难想到，String每次需要创建新的对象，那么它所花费的时间比如是最多的。顺便说一下，这个实验是在2.2 GHz Intel Core i7、16 GB 1600 MHz DDR3的macOS操作系统上做的。

## 安全差异
- String是不可变，所以String是线程安全的，因为多个线程同时修改一个String的时候，都是创建了新的字符串
- StringBuffer是线程安全的，以`append()`方法为例，它在这个方法上面加了同步，而且它用toStringCache来做缓存，避免了同时读写导致的错误，所以它也是安全的

    ```java
     @Override
    public synchronized StringBuffer append(String str) {
        toStringCache = null;
        super.append(str);
        return this;
    }

    @Override
    public synchronized String toString() {
        if (toStringCache == null) {
            toStringCache = Arrays.copyOfRange(value, 0, count);
        }
        return new String(toStringCache, true);
    }
    ```
- StringBuilder不是线程安全的，它没有同步也没有缓存

    ```java
    @Override
    public StringBuilder append(String str) {
        super.append(str);
        return this;
    }
    ```

### 总结
- 效率: StringBuilder > StringBuffer > String
- 在使用的时候，如果操作的数据量比较小，应该优先使用String
- 如果是在单线程下大量操作数据，应该优先使用StringBuilder
- 如果是在多线程下大量操作数据，应该优先使用StringBuffer
- 乱入: 一个类只能继承一个类，一个类能实现多个接口，一个接口能继承多个接口


