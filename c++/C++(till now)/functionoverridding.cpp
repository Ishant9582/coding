#include<iostream>
using namespace std;
class base{
    public:
    void fun(){
        cout<<"hello" <<endl;
    }
};
class derived:public base {
    public:
    void fun(){
        cout<<"helo derived"<<endl;
    }
};
int main(){
    derived d ;
    base b ;
    d.fun();
    b.fun();
}