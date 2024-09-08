#include <iostream>
using namespace std;
int main()
{
    int n = 6;
    for (int i = 1; i <= n; i++)
    {
        for (int j = n; j >= 1; j--)
        {
            if (j > n - i + 1)
            {
                cout << " ";
            }
            else
            {
                // cout<<j<<n ; 
                if (i == 1 || (j==n-i+1) || j==1)
                {
                    cout << "* ";
                }
                else
                {
                    cout << "  ";
                }
            }
        }
        cout << endl;
    }

}