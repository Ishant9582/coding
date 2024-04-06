#include<iostream>
using namespace std;
class base{
    public:
    void fun(){
        cout<<"helllo"<<endl ;
    }
};
class derived:public base{
    public:
    void fun1(){
        cout<<"hooolo"<<endl;
    }
};
int main(){
    derived d ;
    base *ptr = &d;
    ////or
   // base d ;
    //base *ptr = &d;
  //or
  /*base *ptr ;
  ptr = new derived();*/
   
    ptr->fun() ;
    
}