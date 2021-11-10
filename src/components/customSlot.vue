<script>
export default {
    functional: true,
    props: {
        params: {
            type: Object,
            default: function() {
                return {}
            }
        },
        render: {
            type: Function,
            default: null
        }
    },
    render: function(h, _this) {
        return _this.props.render ? _this.props.render(h, _this.props.params) : null;
    }
}
</script>