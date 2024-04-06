#include<iostream>
using namespace std;
class shape{
    public:
    virtual float area()=0;
    virtual float perimeter()=0;
};
class rectangle:public shape{
    int length ;
    int breadth;
    public:
    rectangle(int l=1 , int b=1){
        length = l ;
        breadth = b ;
    }
    float area(){
        return length*breadth ; 
    }
    float perimeter(){
        return 2*(length + breadth) ;
    }
};
int main(){
    /*rectangle d(2,4);         
    cout<<d.area()<<endl ;  */        // we can do this but for that we need to do both these steps in order to enter values
    shape *ptr = new rectangle(2,4);   
    cout<<ptr->area()<<endl;
    cout<<ptr->perimeter()<<endl;
}