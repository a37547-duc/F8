#include <bits/stdc++.h>
using namespace std;
typedef long long ll;
const ll MOD = 1e9 + 7;
ll power(ll a, ll b, ll c)
{
    if (b == 1)
        return a % MOD;
    ll x = power(a, b / 2, c / 2);

    x = (x * x) % MOD;
    if (b % 2 == 1)
        x = (x * a) % MOD;
    return x;
}

ll solve(ll r, ll n, ll m) // tinh cap so nhan: r^0 + r^1 + ... r^(n-1)
{
    if (n == 1)
        return 1;
    ll x = solve(r, n / 2, m / 2);
    x = (x + (power(r, n / 2, m / 2) * x) % MOD) % MOD;
    //
    if (n % 2 == 1)
        x = (x + power(r, n + 1, m - 1)) % MOD;
    return x;
}

int main()
{
    int r, n, a, m;
    cin >> a >> r >> n >> m;
    cout << (a * solve(r, n, m)) % MOD << endl;
    return 0;
}
