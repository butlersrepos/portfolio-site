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
            height: 2em;

            & > * {
                height: 100%;
            }

            h2 {
                margin: 0;
                @include flex-col();
                padding: 0 1em;
            }

            .caret { 
                flex-basis: 5%; 
            }

            .icon {
                transform: rotate(45deg);

                &:before {
                    cursor: pointer;
                    background: radial-gradient(
                        50% 23% at 50% 54%,
                        $ctaColor 0%, $ctaColor 99%, transparent 100%
                    );
                }
            }

            section {
                flex-basis: 100%;
                font-style: italic;
            }
        }
    </style>
</experiment-entry>