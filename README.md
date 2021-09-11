# DaveAI

Create a function using a programming language of your choice.

def variate(word, number_of_insertions = 2, number_of_deletions = 2, number_of_substitutions = 2):

    """

    This function creates all possible spelling mistakes of the given word,

     e.g.  word = and

     output -

    a, n, d (2 deletions)

    nd, ad, an, (1 deletion)

    bnd, cnd ... (1 substitution)

    aand, abnd, acnd,.... (1 insertion)

    ......  (2 substitutions)

    ......  (2  insertions)

    ......  (1 substitution, 1 insertion)
