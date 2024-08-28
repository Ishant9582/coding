#include<iostream>
using namespace std;
bool f(int num , int *temp){
    if(num>=0 and num<=9 ){
       int lastdigit = (*temp)%10;
       *temp=(*temp)/10 ;
       return (num==lastdigit);
    }
    bool result=(f(num/10 , temp)  and (num%10)==((*temp)%10));
    *temp=(*temp)/10;
    return result;
}
int main(){
    int num = 818;
    int anothernumber = num;
    int *temp = &anothernumber;
    cout<<f(81,temp);

}