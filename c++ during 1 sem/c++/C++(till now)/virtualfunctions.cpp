#include<iostream>
using namespace std;
class base{
    public:
    virtual void fun(){
        cout<<"hello base"<<endl ;     
    }
};
class derived:public base{
    public:
    void fun(){
        cout<<"hello derived"<<endl ;

    }
};
int main(){
    base *ptr = new derived();
    ptr->fun();
}