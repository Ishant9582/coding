#include <iostream>
using namespace std;
int main()
{
    int n = 8;
    for (int i = 1; i <= n; i++)
    {
        char ch = 'A' - 1;
        for (int j = 1; j <= 2*i - 1 ; j++)
        {
            if (j <= i)
            {
                ch++;
                cout << ch;
            }
           
            else{
                ch-- ;
                cout << ch ;
            }
        }
       
            cout << endl;
    }
}