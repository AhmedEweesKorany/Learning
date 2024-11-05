
# 6 Steps to Ace the Coding Interview:


## 1-Ask clarifying questions

This might be harder to conceptualize right now if you’ve primarily been doing Leetcode questions. Leetcode already formalizes many assumption, and usually already has the function signature given. Those are things that usually aren’t stated up front in an interview question, and you’ll have to figure them out yourself.

Some interviewers like to intentionally leave out assumptions that will simplify the problem. In those cases, they expect you to ask and make thing easier for you. If you don’t ask, they will count it against you!

A big part of the interview process is not just seeing what code you produce, but actually seeing what your thought process is and how you approach questions. This is the first step in your thought process - how do you convert from an abstract problem into a concrete set of assumptions.

Think of this whole interview as a conversation between yourself and the interviewer, and it all starts with this step.

- Aim to spend 1-5 minutes here depending on how complex the question is
- Validate that you understand the question correctly
- State or agree on assumptions/constraints
    - What else may be available to you? I.e., do you need to write the full class, or just a function?
    - Example: “Can I assume that I have a list of all words as an input?”
- Make sure you ask about edge cases
    - Null, infinite options, capitals and lowercase, etc

## 2-Medium sized example input

- Unless the interviewer gives this to you, come up with your own example.
    - If the interviewer gives you a simple example, you should still come up with a medium sized one.
- Should not be too small nor too big (you will use this to step through your code later).
- This is another way to confirm with the interviewer that you understand the question.

Even if the interviewer gives you an example, it may make sense to come up with your own

Sometimes interviewers will intentionally choose tricky examples. They might give you an example that covers most of the challenging cases, but intentionally hides a pathological case

However, if you just use the example the interviewer gave you, that should be fine most of the time

Example input: let’s say you have to reverse a linked list, you might want to do an array of A->B->C. Three nodes will give you a general solution and easy to test, smaller than that will probably be too small of an input and have some special casing

## 3-Simple solution, then iterate

- Mention the brute force solution that first comes to mind.
- Mention the problem with the brute force solution (Big O complexity).
- Then think about better solutions and mention it to your interviewer as you come up with them.
- Once you come up with the best solution you can, ask interviewer if the proposed approach is reasonable.
- Write pseudocode and then start implementing in real code.

Again, this whole process is a conversation between yourself and the interviewer. Make sure you’re discussing your thought process out loud. It is very important for interviewers to be able to see what conclusions you’re reaching, but also _why._

For example, if you come up with the brute force solution first, then you say “OK, so the challenge here is that we can’t just compare a number to its neighbors, we have to scan the entire array to compare. However, if we sorted the array, we could actually just compare to the neighbors, so let’s sort first… that would take us to O(n log n) time, and I know we can’t sort any faster than that. Hm, now let me think, could I do this without X or Y”…

If the interviewer doesn’t know what you’re thinking, they can’t figure out where you’re stuck and they can’t give you hints to get you past the block.

**This is roughly half the interview!** One way to look at it is: half the interview is coming up with the right approach, and half the interview is translating the approach into code. Those are not necessarily related things!

- Interviewers may grade separately on how good you are at coming through the approach, and how well you code it. - If you struggle to come up with a good approach, interviewers will give you hints or eventually even tell you the right approach, and see how you translate this approach to code. If you struggle with the approach, but once once given it you’re able to code it really well, that could be enough to get a “hire” decision. - However, if you do a really good job of coming up with an approach but don’t have the time or ability to translate that into code, that could also be a problem.

If you’re really stuck on how to do better, and the interviewer is not helping you, it’s ok to ask for a hint too. Don’t just give up though, first try to make progress on your own.

- Generally, if you can solve it completely on your own, that’s best. Solving it with hints is always better than not solving it at all though! - It’s pretty common for interviewees to need some small hints though, so wouldn’t worry too much about it. - **Don’t ignore hints from the interviewer!**

Also, if you’re not able to progress past the brute force / simple solution, and the interviewer isn’t giving you additional hints, ask if it makes sense for you to start implementing the brute force solution or if you should spend some more time trying to brainstorm better solutions.

- Generally, having working code for a non-ideal solution is better than having non-working code for the ideal solution. However, this can depend on the question and the interviewers preference, so it’s important to be communicating with the interviewer.

## 4-Start coding

- Do **not** begin coding until you have worked through steps 1-3!
- You don’t need to talk while coding unless something is complicated that interviewer won’t understand.
- Remember to have proper indentation, good variable names, clean code, etc.
- If some code is complex, put a placeholder for helper method (don’t implement it yet).
- Once done with the main method, implement the helper methods.
    - Don’t move onto the next step until this is done.

## 5-Walk through code with medium sized example input

- After you finish coding, don’t say “I think this should work” until you walk through it with the example you initially came up with.
- Walk through code line by line, very carefully.
- Write in-line comments with values of the variables.
- Make sure the output your code produces matches the expected output.
- If it doesn’t produce correct output, remain calm, debug it until it does.


## 5-List test cases
- **Spoken template:** "I think this code should work but, if this was meant to be production code, I would unit test it with few different test cases that I can go over if you’d like me to."
- For example, if you’re asked to write a function that adds two numbers, your test cases could look something like:

1. **Happy Path**: Adding 2 and 3 should return 5.
2. **Negative Numbers**: Adding -2 and -3 should return -5.
3. **Zero**: Adding 0 and 5 should return 5.
4. **Large Numbers**: Adding 1,000,000 and 2,000,000 should return 3,000,000.

- **Additional examples:** null input, empty input, size 1, large input, all same elements in input, all different elements in input, etc.