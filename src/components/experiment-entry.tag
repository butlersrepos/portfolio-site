<experiment-entry>
    <i class="caret fa fa-2x { isOpen ? 'fa-caret-down' : 'fa-caret-right' }" onclick={ open }></i>
    <h2 for={ this.opts.title }>{ this.opts.title }</h2>
    <i class="icon fa fa-2x fa-{ this.opts.icon }" onclick={ navigate }></i>
    <section if={ isOpen } name={ this.opts.title }>
        { this.opts.description }
    </section>


    <script>
        this.isOpen = false;
        navigate() { window.location.href = this.opts.url }
        
        open() { this.isOpen = !this.isOpen }
    </script>

    <style scoped="scoped">
        @import './src/scss/variables';

        :scope {
            @include flex-row();
            flex-wrap: wrap;
            justify-content: space-around;

            & > * {
                height: 100%;
            }

            h2 {
                margin: 0;
                @include flex-col();
                padding: 0 1em;
                flex-basis: 70%;
            }

            .caret { 
                flex-basis: 5%; 
            }

            .icon {
                transform: rotate(15deg);

                &:before {
                    cursor: pointer;
                    background: radial-gradient(50% 24% at 50% 52%, #2ECC40 0%, #2ECC40 99%, transparent 100%);
                }
            }

            section {
                flex-basis: 100%;
                font-style: italic;
            }
        }
    </style>
</experiment-entry>