<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Blog;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Blog
     */
    public function index()
    {
        $blogs = Blog::where('status', 'publish')->latest()->paginate(10);

        $blogs->map(function ($item) {
            $item['content'] = \Str::limit($item->content, 25);
            $item['feature_image'] = $item->feature_image
                                        ? \Storage::url($item->feature_image)
                                        : '/images/blog-placeholder.png';
            $item['create'] = $item->created_at->diffForHumans();

            return $item;
        });

        return $blogs;
    }

    /**
     * Display single blog.
     *
     * @param $slug
     * @return \Illuminate\Http\Blog
     */
    public function show($slug)
    {
        $blog = Blog::whereSlug($slug)
            ->where('status', 'publish')
            ->firstOrFail();
        $blog['feature_image'] = $blog->feature_image
                                    ? \Storage::url($blog->feature_image)
                                    : '/images/blog-placeholder.png';

        return $blog;
    }
}
