export default
function () {
    this.transition(
        this.fromRoute('login'),
        this.use('toLeft'),
        this.reverse('toRight')
    );

    this.transition(
        this.fromRoute('index'),
        this.use('toLeft'),
        this.reverse('toRight')
    );
};