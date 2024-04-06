#include<iostream>
using namespace std;
class base{
    public:
    ~base(){
        cout<<"destructor of base"<<endl ;
    }
};
class derived:public base{
    public:
    ~derived(){
        cout<<"destructor of derived"<<endl ;
    }
};
void fun(){
   // derived d;                     // if we use this then destructor of drived and then destructor of base called
   base *p = new derived();
   delete p ;                        // if we do this then only destructor of base called to tackle this we use virtual
}
int main(){
    fun();
}