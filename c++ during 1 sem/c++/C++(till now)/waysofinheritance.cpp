#include<iostream>
using namespace std;
class parent {
    private : int a;
    protected : int b;
    public : int c ;
    void func(){
        a=5;
        b=6;
        c=7;
    }
        void display(){
        cout<<a<<b<<c<<endl;
    }
};
class child:public parent{            // if we use protected here then in main we cant change value of c as well as we can change value of c and bin this 
    public:                           // if it is private then we can access b and c here but in granchild we cant access 
    void funcc(){                    // b and c in granchild as it is private in b
        //a=6;    // as a is private
        b=9;
        c=3;
    }
        void display(){
        cout<<b<<c<<endl;
    }
    
};
class grandchild:public child{
    public:
    void funccc(){
     // a = 4;
      b = 3;
      c = 3 ;
    }
    void display(){
        cout<<b<<c<<endl;
    }
};
int main(){
    parent p ;
    //p.a=4; as a and b are protected
    //p.b=4;
    p.c=4;
    child c ;
    c.c = 9 ;
    grandchild g ;
    g.c = 4;
    p.func();
    p.display();
    //c.display();
    //g.display();
}    