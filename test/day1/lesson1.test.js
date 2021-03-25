import reverseWords from '../../code/day1/lesson1'

test('reverseWords: "Let\'s take LeetCode contest" toBe "s\'teL ekat edoCteeL tsetnoc"', () => {
    expect(reverseWords('Let\'s take LeetCode contest')).toBe('s\'teL ekat edoCteeL tsetnoc');
})