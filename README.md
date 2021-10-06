# RSA
Developed by Rivest, Shamir & Adleman of MIT in 1977
best known & widely used public-key scheme
based on exponentiation in a finite (Galois) field
over integers modulo a prime

- nb. exponentiation takes O((log n)3) operations (easy)
uses large integers (eg. 1024 bits)
security due to cost of factoring large numbers
- nb. factorization takes O(e log n log log n) operations (hard)

# Steps to Develop this Incryption technique

each user generates a public/private key pair by:
selecting two large primes at random - p, q
computing their system modulus N=p.q
- note ø(N)=(p-1)(q-1)
selecting at random the encryption key e
- where `1<e<ø(N), gcd(e,ø(N))=1`
solve following equation to find decryption key d
- e.d=1 mod ø(N) and 0≤d≤N
publish their public encryption key: KU={e,N}
keep secret private decryption key: KR={d,p,q}
NETWORK SECURITY PREPARED BY JOSEPH TRSA USE
to encrypt a message M the sender:
- obtains public key of recipient KU={e,N}
- computes: C=Me mod N, where `0≤M<N`
to decrypt the ciphertext C the owner:
- uses their private key KR={d,p,q}
- computes: M=Cd mod N

note that the message M must be smaller than the modulus N (block if
needed)

# HOW RSA WORKS
It follows Euler's Theorem:
- aø(n)mod N = 1
- where gcd(a,N)=1
in RSA have:
- N=p.q
- ø(N)=(p-1)(q-1)
- carefully chosen e & d to be inverses mod ø(N)
- hence e.d=1+k.ø(N) for some k
hence :
Cd = (Me)d = M1+k.ø(N) = M1.(Mø(N))q =
M1.(1)q = M1 = M mod N