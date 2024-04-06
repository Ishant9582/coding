#include<iostream>
#include<vector>
using namespace std;
int main(){

    vector<int> e ;
    cout<<"size"<<e.size()<<endl;
    cout<<"capacity"<<e.capacity()<<endl;
    e.push_back(1);
    cout<<"size"<<e.size()<<endl;
    cout<<"capacity"<<e.capacity()<<endl;
    e.push_back(2);
    cout<<"size"<<e.size()<<endl;
    cout<<"capacity"<<e.capacity()<<endl;
    e.push_back(3);
    cout<<"size"<<e.size()<<endl;
    cout<<"capacity"<<e.capacity()<<endl;
    e.push_back(4);
    cout<<"size"<<e.size()<<endl;
    cout<<"capacity"<<e.capacity()<<endl;
    e.resize(5);
    cout<<"size"<<e.size()<<endl;
    cout<<"capacity"<<e.capacity()<<endl;


    
    e.insert(e.begin()+2,9);
    e.pop_back();
    cout<<"size"<<e.size()<<endl;
    cout<<"capacity"<<e.capacity()<<endl;
    

    e.erase(e.begin()+2);
    e.pop_back();
    e.pop_back();
    //cout<<e<<endl;//we cant do this it wiill give error
    cout<<e[1]<<endl;//or we can use for looop if i want all
    for(int i=0;i<e.size();i++){

        cout<<e[i]<<" ";
    }

}