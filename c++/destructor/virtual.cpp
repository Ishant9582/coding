#include<iostream>
using namespace std;
class base{
    public:
    virtual ~base(){
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
   base *p = new derived();
   delete p ;  
}                      
int main(){
    fun();
}