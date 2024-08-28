#include<iostream>
using namespace std;
int main(){
    int array[]={3,1,2,4,0,6};
    int targetsum=7;
    for(int i=0 ; i<6;i++){
        int a=array[i];
        //cout<<a<<endl;
        //cout<<a<<endl;
        for(int b=i+1;b<6;b++){
            int c=array[b];
            //cout<<c<<endl;
            for(int g=b+1;g<6;g++){
                int m=array[g];
                if((a+c+m)==targetsum){
                    cout<<a<<c<<m<<endl;
                }
            }
           
            
        }
    }

}