#include<iostream>
using namespace std;
class student{
    private:
    int roll ;
    string name ;
    public:
    static int addno ;
    student(string n){
        addno++;
        roll = addno ;
        name = n ;
    }
    static int getaddno(){                    // static function
        return addno ;
    }
    void display(){
        cout<<"name: "<<name<<"   "<<"roll no :"<<roll<<endl ; 
    }
};
int student::addno = 0 ;
int main(){
    student s1("hello") ;
    student s2("bello");
    student s3("bulllo");
    s1.display();
    s2.display();
    s3.display();
    cout<<"no. of admissions are"<<s1.addno<<endl;
    //or
    cout<<"no. of admissions are"<<student::addno<<endl;

}