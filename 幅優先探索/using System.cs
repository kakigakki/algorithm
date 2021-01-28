using System;

using System.Collections.Generic;

using System.ComponentModel;

using System.Data;

using System.Drawing;

using System.Linq;

using System.Text;

using System.Windows.Forms;
namespace FormDataInteractive
{

/// <summary>

/// powered by shadu {at} foxmail.com

/// </summary>

public partial class Form1 : Form

{

public Form1()

{

InitializeComponent();

}

 

private void button1_Click(object sender, EventArgs e)

{

// 创建Form2，并添加事件处理函数

Form2 frm = new Form2();

frm.DataChange += new Form2.DataChangeHandler(DataChanged);

frm.ShowDialog();

}

 

public void DataChanged(object sender, DataChangeEventArgs args)

{

// 更新窗体控件

textBox1.Text = args.name;

textBox2.Text = args.pass;

}

}

}

 

Form2代码如下：

using
System;

using
System.Collections.Generic;

using
System.ComponentModel;

using
System.Data;

using
System.Drawing;

using
System.Linq;

using
System.Text;

using
System.Windows.Forms;

 
 

namespace
FormDataInteractive

{

    public
partial
class
Form2 : Form

    {

        // 定义委托

        // public delegate void DataChangeHandler(string x); 一次可以传递一个string

        public
delegate
void
DataChangeHandler(object
sender, DataChangeEventArgs args);

        // 声明事件

        public
event
DataChangeHandler DataChange;

 
 

        // 调用事件函数

        public
void
OnDataChange(object
sender, DataChangeEventArgs args)

        {

            if
(DataChange != null)

            {

                DataChange(this, args);

            }

        }

 
 

        public
Form2()

        {

            InitializeComponent();

        }

 
 

        private
void
button1_Click(object
sender, EventArgs e)

        {

            // 触发事件， 传递自定义参数

            OnDataChange(this, new
DataChangeEventArgs(textBox1.Text, textBox2.Text));

        }

    }

 
 

    /// <summary>

    /// 自定义事件参数类型，根据需要可设定多种参数便于传递

    /// </summary>

    public
class
DataChangeEventArgs : EventArgs

    {

        public
string
name { get; set; }

        public
string
pass { get; set; }

        public
DataChangeEventArgs(string
s1, string
s2)

        {

            name = s1;

            pass = s2;

        }

    }

}