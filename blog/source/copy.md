title: "JAVA深拷贝和浅拷贝"
date: 2017-03-11 15:00:00 +0800
update: 2017-03-11 15:00:00 +0800
author: me
tags:
    - copy
    - 拷贝
preview: JAVA里面变量有两种拷贝的方法，深拷贝和浅拷贝。

---

# 赋值
一般情况下的赋值都是地址引用的传递(引用和指针是有区别的，在java里面没有指针，只有引用，引用是不能被修改的；而指针是可以修改的，如在C++里面有pointer++)

所以在使用JAVA的时候，对于赋值对象的修改需要小心。比如在某些框架下的依赖注入，对于注入的对象，在使用过程中，如果进行修改可能会得到不同的结果。

```JAVA
public class Test {
	
	public String name;

	public static void main(String[] args) {
		//定义变量test，并将其名字定义为dog
		Test test = new Test();
		test.name = "dog";
		
		//将test赋值给test2，修改其名字为cat
		Test test2 = test;
		test2.name = "cat";
		
		System.out.println(test.name);
		System.out.println(test2.name);
	}

}
```

其输出结果为
```out
cat
cat
```

可以看出test和test1引用的是内存中的同一个对象，修改任何一个引用，都会影响其他引用。

# 浅拷贝
浅拷贝是指拷贝对象本身（包括对象中的基本变量），不拷贝对象中的引用。在JAVA中，实现浅拷贝的方法是实现Cloneable接口

举个例子
```JAVA
public class Test implements Cloneable {
	
	public String name;
	public List<String> values = new ArrayList<String>();
	
	public Test clone() {
		Test testCloned = null;
        try {
        	testCloned = (Test) super.clone();
        } catch (CloneNotSupportedException e) {
            System.out.println(e.toString());
        }
 
        return testCloned;
	}

	public static void main(String[] args) {
		//定义变量test
		Test test = new Test();
		test.name = "dog";
		test.values.add(0, "dog value");
		
		//将test克隆给test2，并修改test2的内容
		Test test2 = test.clone();
		test2.name = "cat";
		test2.values.set(0, "cat value");
		
		System.out.println(test.name + ":" + test.values.get(0));
		System.out.println(test2.name + ":" + test2.values.get(0));
		
	}
	
}
```

其结果为
```out
dog:cat value
cat:cat value
```

可以看出在浅拷贝中，修改基本变量name被拷贝了，所以修改name不会影响其他对象；而List属性则没有被拷贝，所有对象的List属性的值都改变了

# 深拷贝
## 1. 伪深拷贝
有一种假的深拷贝，它的方法是对所有涉及到的非基本类型变量都实现Cloneable接口。

比如上面的例子，做法就是重写List对象，让它也实现Cloneable接口，并且修改Test实现的clone的函数。
```JAVA
testCloned = (Test) super.clone();
testCloned.values = (List) values.clone();
```
为什么说是伪克隆呢？因为如果List对象里面也有非基本类型变量，那么这些非基本变量类型不会被克隆。

比如：假设重写的List里面有对象AClass，用上面的方法，AClass是不会被拷贝的。

这种伪深拷贝的关键是`覆盖拷贝`。

![](-/images/copy/copy.png)

## 2. 深拷贝
序列化(串行化)是深拷贝的一个方法。

过程：内存对象 -> 序列化 -> 新的内存对象。 这样前后两个对象的内容是一致的，但是在内存中的引用不一样。

序列化的过程如下：

```JAVA
public static <T extends Serializable> T clone(T obj) {
	T clonedObj = null;
	try {
		//将对象变成序列（序列号）
		ByteArrayOutputStream output = new ByteArrayOutputStream();
		ObjectOutputStream objOutput = new ObjectOutputStream(output);
		objOutput.writeObject(obj);
		objOutput.close();
		
		//将序列还原成对象（反序列化）
		ByteArrayInputStream input = new ByteArrayInputStream(output.toByteArray());
		ObjectInputStream objInput = new ObjectInputStream(input);
			
		clonedObj = (T) objInput.readObject();
		
		objInput.close();
	} catch (IOException | ClassNotFoundException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
		
	return clonedObj;
		
}
```

在使用这个clone函数的时候，需要让原有对象实现Serializable接口(从clone函数的参数也能看出)。

```JAVA
public class Test implements Serializable {

	private static final long serialVersionUID = -2386382139170837795L;
	public String name;
	public List<String> values = new ArrayList<String>();

	public static void main(String[] args) {
		//定义变量test
		Test test = new Test();
		test.name = "dog";
		test.values.add(0, "dog value");
		
		//将test克隆给test2
		Test test2 = clone(test);
		test2.name = "cat";
		test2.values.set(0, "cat value");
		
		System.out.println(test.name + ":" + test.values.get(0));
		System.out.println(test2.name + ":" + test2.values.get(0));
		
	}
	
}
```
结果为:
```out
dog:dog value
cat:cat value
```







