#include<iostream>
using namespace std;
class car{
    public:
    virtual void start()=0;            // pure virtual class or abstract class
};
class innova:public car{
    public:
    virtual void start() {

    }

};
class swift:public car{
    public:
    void start(){
        cout<<"swift started"<<endl ;
    }
};
int main(){
    //car d ;                
    //d.start();        // as start is pure virtual class so cant access with car d for accesuing we need pointer
    car *ptr = new innova() ;
    ptr->start() ;
    ptr = new swift() ;
    ptr->start() ;
}