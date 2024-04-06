#include<iostream>
using namespace std;
class test{
    private:
    int a ;
    public:
    static int count ;
    test(){
        a = 10 ;
        count++;
    }
    static int getcount(){                    // static function
        return count;
    }
};
int test::count = 0 ;
int main(){
    test t1,t2 ;
    cout<<t1.count<<endl ;
    cout<<t2.count<<endl;
    cout<<test::count<<endl;
    cout<<test::getcount()<<endl;
    cout<<t1.getcount()<<endl;
}
